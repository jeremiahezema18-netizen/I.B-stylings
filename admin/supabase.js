// supabase.js
supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";
supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

// Create and bind globally
supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

window.supabase = supabase;

alert("Supabase.js loaded successfully");
