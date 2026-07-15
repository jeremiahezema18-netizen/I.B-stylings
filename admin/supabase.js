const supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";

const supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

window.supabaseClient = supabase;
