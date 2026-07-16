// admin/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://eravuxirymuooojyngjz.supabase.co';
const supabaseKey = 'sb_publishable_ZRFXaRtBDsXe9WY4iDDfUg_erIKsJDq'; // Your Anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
