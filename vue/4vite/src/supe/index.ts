import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfgrnmcgdwljcmjvntub.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmZ3JubWNnZHdsamNtanZudHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5MzAxMjcsImV4cCI6MjAwMTUwNjEyN30.EAdxiu4Lpd5N-HVOyL9Was-igdW00fdlemBabrX9uMg'
const supabase = createClient(supabaseUrl, supabaseKey)

export default  supabase;