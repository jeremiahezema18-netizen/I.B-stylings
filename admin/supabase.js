// supabase.js
const supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";
const supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

// 1. Create the client and assign it directly to a global 'supabase' variable
supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// 2. This ensures any script looking for window.supabase gets your configured client
window.supabase = supabase;

alert("Supabase.js loaded successfully");
