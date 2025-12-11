import { users, type roles } from "../generated/prisma/client.ts";

export type UserPayload = Omit<
  users,
  "password" | "api_token" | "remember_token" | "created_at" | "updated_at"
> & {
  roles: roles["name"][];
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
    }
  }
}
