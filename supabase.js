// Configuración del cliente Supabase para AL FORNO
// Carregue o CDN antes deste arquivo:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// <script src="supabase.js"></script>

const SUPABASE_URL = 'https://hihmjfwmroemhpwdxpbm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpaG1qZndtcm9lbWhwd2R4cGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NTY4MzcsImV4cCI6MjEwOTEzMjgzN30.TmUI5o3lrTZNruaSd32aHZFd9Zb25UynmKVDDPaSckk';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
