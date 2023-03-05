import { User } from "./user";

export interface Session {
  sessionActive: boolean;
  userActive?: User;//en caso de false, no hay user activo
}
