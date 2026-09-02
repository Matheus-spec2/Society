const SUPABASE_URL = "https://pxhebypfwpjlsbnefgfu.supabase.co";
const SUPABASE_KEY = "sb_publishable_KPB3rr5NCKaODCPQ82Tavw_hiqV3E2R";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
console.log("Supabase conectado!");  
