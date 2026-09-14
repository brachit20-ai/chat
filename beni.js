const user = supabase.auth.user();

const { data: messages } = await supabase
  .from('messages')
  .select('*')
  .eq('user_id', user.id); // טוען רק את ההודעות של המשתמש הזה
