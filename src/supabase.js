import { createClient } from "@supabase/supabase-js";

const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;
const projectUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;

const supabase = createClient(projectUrl, apiKey);

export default supabase;
