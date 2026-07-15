// supabase.js
supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";
supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

// We use 'supabaseClient' here to avoid clashing with the CDN namespace!
supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

window.supabaseClient = supabaseClient;

alert("Supabase.js loaded successfully");
