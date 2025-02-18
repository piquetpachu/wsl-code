import { createClient } from "@supabase/supabase-js";

export const client = createClient(
  'https://budscgsdcqocnmouexgy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1ZHNjZ3NkY3FvY25tb3VleGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTMxNTIsImV4cCI6MjA1MzM4OTE1Mn0.9OgCg_oqOdS5JL9fn2GV729T6kcWLTRkoU4cmvUBmns'
);
