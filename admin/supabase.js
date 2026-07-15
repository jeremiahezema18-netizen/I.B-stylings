const supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";
const supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

const client = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

window.supabaseClient = client;

alert("Supabase.js loaded successfully");
