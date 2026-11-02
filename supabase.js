// Configuración del cliente Supabase para AL FORNO
const SUPABASE_URL = 'https://hihmjfwmroemhpwdxpbn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpaG1qZndtcm9lbWhwd2R4cGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NTY4MzcsImV4cCI6MjEwOTEzMjgzN30.TmUI5o3lrTZNruaSd32aHZFd9Zb25UynmKVDDPaSckk';

// Aseguramos que la instancia global se cree de forma segura verificando la librería del CDN
if (!window.alfornoSupabase) {
    try {
        const createClientFn = window.supabase?.createClient || window.Supabase?.createClient;
        if (createClientFn) {
            window.alfornoSupabase = createClientFn(SUPABASE_URL, SUPABASE_ANON_KEY);
        } else {
            console.error("La librería de Supabase CDN no se ha cargado correctamente.");
        }
    } catch (err) {
        console.error("Error al inicializar Supabase:", err);
    }
}