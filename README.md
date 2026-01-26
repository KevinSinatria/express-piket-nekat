# PIKET-NEKAT Backend 🚀

> Sistem Backend untuk Manajemen Piket dan Izin Siswa - Dokumentasi Internal Developer

## 📖 System Overview

Codebase ini adalah REST API backend yang menangani **sistem manajemen piket sekolah** dan **izin keluar siswa**. Sistem ini dirancang untuk mengelola:

1. **Manajemen Izin Siswa (`student-permits`)** - Workflow approval izin keluar dengan 3 tahap: Guru Mapel → Piket → Satpam
2. **Jadwal Piket (`piket-schedules`)** - Penugasan guru piket harian
3. **Penugasan Guru (`teacher-assignments`)** - Tugas guru ke kelas tertentu
4. **Pelanggaran Siswa (`violations`)** - Sistem poin pelanggaran tata tertib
5. **Periode Tahun Ajaran (`year-periods`)** - Manajemen tahun ajaran aktif

### Flow Utama: Izin Keluar Siswa

```mermaid
stateDiagram-v2
    [*] --> PENDING_MAPEL: Piket Create Permit
    PENDING_MAPEL --> PENDING_PIKET: Guru Mapel Approve
    PENDING_MAPEL --> REJECTED: Guru Mapel Reject
    PENDING_PIKET --> APPROVED: Piket Approve
    PENDING_PIKET --> REJECTED: Piket Reject
    APPROVED --> [*]: Satpam Confirm
    REJECTED --> [*]
```

---

## 🛠 Technical Stack

| Layer              | Library                   | Version                  |
| ------------------ | ------------------------- | ------------------------ |
| **Runtime**        | Node.js                   | ESM modules              |
| **Framework**      | Express.js                | ^5.1.0                   |
| **Language**       | TypeScript                | ^5.9.3                   |
| **ORM**            | Prisma                    | ^7.0.0                   |
| **Database**       | PostgreSQL                | via `@prisma/adapter-pg` |
| **Validation**     | Zod                       | ^4.1.12                  |
| **Authentication** | jsonwebtoken + bcrypt     | JWT Cookie-based         |
| **API Docs**       | swagger-ui-express + YAML | OpenAPI 3.x              |
| **Logging**        | morgan                    | dev format               |
| **Excel Export**   | exceljs                   | ^4.4.0                   |
| **Dev Server**     | tsx (watch mode)          | ^4.20.6                  |
| **Deployment**     | Vercel                    | Serverless               |

---

## 🏗 Architecture Breakdown

Proyek ini menggunakan pola **Controller-Service Architecture** yang modular. Setiap fitur dipisah ke dalam folder tersendiri di `src/modules/`.

```
src/
├── app.ts              # Express app setup, middleware chain
├── server.ts           # Entry point, port binding
├── routes.ts           # Central router aggregator
│
├── config/             # Konfigurasi singleton
│   ├── env.ts          # Helper untuk akses process.env
│   └── prisma.ts       # Prisma client dengan PostgreSQL adapter
│
├── middlewares/        # Middleware reusable
│   ├── auth.middleware.ts      # JWT + Role check
│   ├── error-handler.middleware.ts  # Error centralized
│   └── validate.middleware.ts  # Zod validation wrapper
│
├── modules/            # Feature modules
│   ├── auth/           # Login, logout, getMe
│   ├── users/          # CRUD user
│   ├── students/       # CRUD siswa
│   ├── student-permits/ # Core: izin keluar
│   ├── piket-schedule/ # Jadwal piket
│   ├── teacher-assignment/ # Penugasan guru
│   ├── classes/        # CRUD kelas
│   ├── subject/        # CRUD mata pelajaran
│   ├── roles/          # CRUD roles
│   ├── user-roles/     # Assignment user-role
│   ├── year-periods/   # Tahun ajaran
│   └── reports/        # Excel/JSON report export
│
├── types/              # Type augmentation
│   └── express.d.ts    # User payload di request
│
├── utils/              # Utilitas
│   └── pagination.ts   # Helper paginasi
│
└── generated/          # Prisma client output
    └── prisma/
```

### Struktur Per Module

Setiap module mengikuti pola 4-file yang konsisten:

```
[module-name]/
├── [module].routes.ts      # Router + middleware chain
├── [module].controller.ts  # Request handling, response formatting
├── [module].service.ts     # Business logic, Prisma queries
└── [module].schema.ts      # Zod schemas untuk validasi
```

### Tanggung Jawab Setiap Layer

| Layer          | File              | Tanggung Jawab                                                                |
| -------------- | ----------------- | ----------------------------------------------------------------------------- |
| **Routes**     | `*.routes.ts`     | Definisi endpoint, middleware chain (auth, validation), mapping ke controller |
| **Controller** | `*.controller.ts` | Extract request params, panggil service, format response JSON                 |
| **Service**    | `*.service.ts`    | Business logic murni, Prisma queries, tidak tahu tentang HTTP                 |
| **Schema**     | `*.schema.ts`     | Validasi input dengan Zod (body, query, params)                               |

> 💡 **Catatan Penting**: Service menerima `prisma` client sebagai parameter pertama (dependency injection sederhana) sehingga memudahkan testing dan menjaga decoupling.

---

## 🔐 Environment Setup

Buat file `.env` di root folder dengan variabel berikut:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
JWT_SECRET=your-super-secret-jwt-key-minimum-32-chars
```

| Variable       | Required | Description                                                |
| -------------- | -------- | ---------------------------------------------------------- |
| `PORT`         | ❌       | Port server (default: 5000)                                |
| `NODE_ENV`     | ❌       | `development` atau `production` (untuk cookie secure flag) |
| `DATABASE_URL` | ✅       | PostgreSQL connection string                               |
| `JWT_SECRET`   | ✅       | Secret key untuk signing JWT token                         |

---

## 🗄 Database Logic

### Entity Relationship Overview

```mermaid
erDiagram
    users ||--o{ user_role : has
    roles ||--o{ user_role : belongs_to

    users ||--o{ student_permits : "creates (piket)"
    users ||--o{ student_permits : "approves (mapel)"

    student_permits ||--o{ student_permit_details : contains
    students ||--o{ student_permit_details : listed_in

    students ||--o{ detail_students : enrollment
    classes ||--o{ detail_students : has
    year_period ||--o{ detail_students : in_period

    students ||--o{ violations : commits
    violation_type ||--o{ violations : type_of
    violation_category ||--o{ violation_type : categorizes

    users ||--o{ PiketSchedule : assigned
    users ||--o{ teacher_assignments : teaches
    classes ||--o{ teacher_assignments : in_class
    subjects ||--o{ teacher_assignments : teaches_subject
```

### Model-Model Utama

#### `students`

Master data siswa dengan `nis` sebagai primary key. Satu siswa bisa punya banyak `detail_students` karena setiap tahun ajaran dapat berbeda kelas.

#### `detail_students`

Pivot table yang menghubungkan siswa, kelas, dan tahun ajaran. Ini memungkinkan siswa naik kelas setiap tahun tanpa mengubah data master.

#### `student_permits`

Core entity untuk izin keluar. Satu permit bisa mencakup **banyak siswa** via `student_permit_details`. Status mengikuti enum:

- `PENDING_MAPEL` - Menunggu approval guru mapel
- `PENDING_PIKET` - Approved mapel, menunggu piket
- `APPROVED` - Fully approved, bisa keluar
- `REJECTED` - Ditolak di salah satu tahap
- `CANCELED` - Dibatalkan

#### `users` & `roles`

Many-to-many relationship via `user_role`. Satu user bisa punya multiple roles seperti `ADMIN`, `PIKET`, `MAPEL`, `SATPAM`.

#### `violations` & Tipe Pelanggaran

Sistem poin pelanggaran dengan kategori dan tipe. Setiap pelanggaran memiliki poin dan hukuman yang sudah ditentukan.

---

## 🚀 Development Workflow

### Scripts yang Tersedia

```bash
# Development (hot reload via tsx)
npm run dev

# Build TypeScript ke JavaScript
npm run build

# Start production server
npm start

# Build API documentation (Stoplight Elements)
npm run build:docs

# Deploy ke Vercel
npm run deploy
```

### Menjalankan Development Server

```bash
# 1. Install dependencies
npm install

# 2. Setup database
npx prisma generate    # Generate Prisma client
npx prisma db push     # Sync schema ke database

# 3. Start development server
npm run dev
```

Server akan jalan di `http://localhost:5000` dengan:

- API endpoints di `/`
- Swagger UI di `/docs`
- OpenAPI spec file di `/api-docs`

### Database Migration

Karena menggunakan `prisma db push` (bukan migrate), workflow-nya:

1. Edit `prisma/schema.prisma`
2. Run `npx prisma db push`
3. Run `npx prisma generate` jika ada perubahan model

> ⚠️ **Hati-hati**: `db push` bisa destructive di production. Untuk production, pertimbangkan migrasi manual atau gunakan `prisma migrate`.

---

## 📝 Coding Standards

### 1. Error Handling

Semua error di-handle secara terpusat di `error-handler.middleware.ts`:

```typescript
// Error di-throw dari service atau controller
throw new Error("Resource not found");

// Middleware akan catch dan format response
// Zod errors → 400 + validation details
// Prisma P2025 → 404 (not found)
// Prisma P2002 → 409 (conflict/duplicate)
// Lainnya → 500
```

**Pattern di Controller:**

```typescript
const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await service.getById(prisma, req.params.id);
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error); // Delegate ke error handler
  }
};
```

### 2. Input Validation dengan Zod

Validasi dibuat sebagai object dengan key `body`, `query`, dan `params`:

```typescript
// ✅ Correct pattern
export const createSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    age: z.number().int().positive(),
  }),
  params: z.object({
    id: z.coerce.number().int(),
  }),
  query: z.object({
    page: z.coerce.number().default(1),
  }),
});
```

### 3. Response Format

Semua response mengikuti format konsisten:

```json
// Success
{
  "success": true,
  "message": "Operation description",
  "data": { ... },
  "meta": { ... }  // Optional: pagination info
}

// Error
{
  "success": false,
  "message": "Error description",
  "errors": { ... }  // Optional: validation errors
}
```

### 4. Penamaan File

| Tipe          | Konvensi                 | Contoh                         |
| ------------- | ------------------------ | ------------------------------ |
| Module folder | `kebab-case`             | `student-permits/`             |
| Controller    | `[module].controller.ts` | `student-permit.controller.ts` |
| Service       | `[module].service.ts`    | `student-permit.service.ts`    |
| Routes        | `[module].routes.ts`     | `student-permit.routes.ts`     |
| Schema        | `[module].schema.ts`     | `student-permit.schema.ts`     |

### 5. TypeScript Best Practices

- Gunakan `strict: true` di tsconfig (already configured)
- Export controller/service sebagai object, bukan individual functions
- Type request dengan `z.infer<>` untuk type safety

```typescript
type CreateRequest = Request<
  unknown, // params
  unknown, // response body
  z.infer<typeof schema.createSchema>["body"] // request body
>;
```

### 6. Authentication Pattern

```typescript
// Protect entire router
router.use(authMiddleware);

// Role-based protection per endpoint
router.post("/", roleCheckMiddleware(["ADMIN", "PIKET"]), controller.create);
router.get("/", roleCheckMiddleware(["ADMIN", "MAPEL"]), controller.getAll);
```

User yang sudah authenticated bisa diakses via `req.user`:

```typescript
const { id, username, fullname, roles, nip } = req.user!;
```

---

## 📚 Additional Resources

- **OpenAPI Documentation**: Lihat `/docs` saat server running
- **Prisma Studio**: Run `npx prisma studio` untuk GUI database
- **Type Definitions**: Check `src/generated/prisma/` untuk generated types

---

**Tim Pengembang**: Team TeFa RPL SMKN 1 Katapang
**License**: ISC
