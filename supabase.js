import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pusjaotypxzrwwkvbqwk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1c2phb3R5cHh6cnd3a3ZicXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NTA4NTMsImV4cCI6MTk5OTAyNjg1M30.ePSLeNYQRZy2FnX43nVGRip71ZziY1y-SH4fCwiHbdg";

export const supabase = createClient(supabaseUrl, supabaseKey);
