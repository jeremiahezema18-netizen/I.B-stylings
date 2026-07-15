// supabase.js
supabaseUrl = "https://eravuxirymuooojyngjz.supabase.co";
supabaseKey = "sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq";

// Initialize the client
const client = supabase.createClient(supabaseUrl, supabaseKey);

// Bind it globally to every possible name the pages might look for
window.supabase = client;
window.supabaseClient = client;
supabaseClient = client;

console.log("Supabase Client initialized globally successfully.");
