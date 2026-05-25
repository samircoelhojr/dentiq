import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole =
  | "estudante_odontologia"
  | "estudante_outro_curso"
  | "professor"
  | "dentista";

export interface Profile {
  id: string;
  full_name: string;
  phone: string | null;
  role: UserRole;
  university: string | null;
  semester: number | null;
  course: string | null;
  how_heard: string;
  created_at: string;
}
