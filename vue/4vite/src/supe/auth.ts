import supabase from ".";

export async function signUpWithEmail(email: string, password: string ) {

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
    return {data, error};
}


export async function signInWithEmail(email : string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return {data, error};
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error, 'signout error');
}


export async function signInWithOtp(email: string, emailRedirectTo: string): Promise<{data: any, error: any}> {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo,
      },
    });
    return {data, error};

  }