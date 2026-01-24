// api/users.js
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
import { VercelRequest, VercelResponse } from '@vercel/node';

const supabase = createClient(
  process.env.SUPABASE_URL!, 
  process.env.SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { data, error } = await supabase.from('users').select('*');
  
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}