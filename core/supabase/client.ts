import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://oykfqhoodcezvcrngmwn.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95a2ZxaG9vZGNlenZjcm5nbXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MDg3NTQsImV4cCI6MjA0NjI4NDc1NH0.WLHoEzR9yiHhhOeBAj0h1kcc9fQxAWfIkW3CF4f1zls'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Prueba de conexión
export const testConnection = async () => {
    try {
      const { data, error } = await supabase.from('tasks').select('*').limit(1);
      if (error) {
        console.error('Error al conectar con Supabase:', error);
      } else {
        console.log('Conexión exitosa. Datos:', data);
      }
    } catch (err) {
      console.error('Error inesperado:', err);
    }
  };