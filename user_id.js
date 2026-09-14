const user = supabase.auth.user();

await supabase
  .from('messages')
  .insert([
    { 
      text: messageText, 
      user_id: user.id // שיוך ההודעה למשתמש הספציפי
    }
  ]);
