import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/api/data', async (req, res) => {
  const { data, error } = await supabase.from('your_table').select('*');
  if (error) return res.status(500).send(error.message);
  res.send(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));

const { data, error } = await supabase
  .from('Employee')
  .select('*');
if (error) console.error(error);
else console.log(data);


const { data, error } = await supabase
  .from('Employee')
  .insert([{ column1: '221111111', column2: 'Husain', column3:'admin',column4:true,column5:false }]);
if (error) console.error(error);
else console.log(data);