import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rcemiezxqkvorzcvybuc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZW1pZXp4cWt2b3J6Y3Z5YnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NzM3MDksImV4cCI6MjA3MjA0OTcwOX0.y37ejCRli2iMTNhrO4gIx-_p3rsbGUBEQQZRmFc6RVo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
