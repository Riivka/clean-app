// api/users.ts
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
import { VercelRequest, VercelResponse } from '@vercel/node';

const supabase = createClient(
  process.env.SUPABASE_URL!, 
  process.env.SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
 // const { data, error } =  await supabase.from('users').select('*');
 const data = [
    { id: 1, full_name: 'Alice Johnson', email: ''}]
const error = null;
  
  if (error) return res.status(500).json({ error: error });
  return res.status(200).json(data);
}