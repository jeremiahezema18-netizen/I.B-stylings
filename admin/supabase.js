// supabase.js

// 1. Your Supabase Credentials
const supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";
const supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

// 2. Safely initialize and attach the client globally under a unique name
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

console.log("Supabase client initialized successfully!");
