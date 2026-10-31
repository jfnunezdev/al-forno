// Configuración del cliente Supabase para AL FORNO
// Carregue o CDN antes deste arquivo:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// <script src="supabase.js"></script>

const SUPABASE_URL = 'AQUÍ_TU_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'AQUÍ_TU_SUPABASE_ANON_KEY';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
