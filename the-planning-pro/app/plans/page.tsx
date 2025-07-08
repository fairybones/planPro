import { createClient } from '../utils/supabase/server'

export default async function Plans() {
  const supabase = await createClient();
  const { data: master } = await supabase.from("master").select();

  return <pre>{JSON.stringify(master, null, 2)}</pre>
}