// Configuración del cliente Supabase para AL FORNO
// Reemplaza los siguientes valores con la URL y la Anon Key de tu nuevo proyecto en Supabase
const SUPABASE_URL = 'https://wvqxzxgunrlptrlngsiz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jbIAZgrcKJniZLhT-_YlEg_7xVoF9iM';

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
