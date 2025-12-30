
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://alxrgrhsdeyweagjgguq.supabase.co'
const supabaseKey = 'sb_publishable_vBFzzDO8k2ylHjTiMEjUpQ_cL_CkNwh'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase