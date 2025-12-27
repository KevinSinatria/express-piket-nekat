import type { Request, Response, NextFunction } from "express";
import { reportService } from "./report.service.js";
import { prisma } from "../../config/prisma.js";
import ExcelJS from "exceljs";

const getStudentPermits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await reportService.getStudentPermitReportData(
      prisma,
      req.query as any
    );
    res.status(200).json({
      success: true,
      message: "Student permit report data fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const exportStudentPermits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await reportService.getStudentPermitReportData(
      prisma,
      req.query as any
    );

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Student Permit Report");

    worksheet.columns = [
      { header: "No", key: "no", width: 5 },
      { header: "Tanggal", key: "date", width: 20 },
      { header: "Nama Siswa", key: "student_name", width: 25 },
      { header: "NIS", key: "nis", width: 15 },
      { header: "Alasan", key: "reason", width: 30 },
      { header: "Jam", key: "hours", width: 15 },
      { header: "Guru Mapel", key: "mapel", width: 25 },
      { header: "Guru Piket", key: "piket", width: 25 },
      { header: "Status", key: "status", width: 15 },
    ];

    // Style Header
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF4F81BD" }, // Blue header
    };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };

    // Add Data
    data.forEach((item, index) => {
      worksheet.addRow({
        no: index + 1,
        date: item.created_at.toLocaleDateString("id-ID"),
        student_name: item.student_permit_details
          .map((student) => student.student.name)
          .join(", "),
        nis: item.student_permit_details
          .map((student) => student.student.nis)
          .join(", "),
        reason: item.reason,
        hours: `${item.hours_start} - ${item.hours_end || ""}`,
        mapel: item.mapel_user.fullname,
        piket: item.piket_user.fullname,
        status: item.status,
      });
    });

    // border for data cells
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=student-permit-report-${Date.now()}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    next(error);
  }
};

export const reportController = {
  getStudentPermits,
  exportStudentPermits,
};
