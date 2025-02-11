import { createClient } from "@/utils/supabase/client";

export const checkUserLogged = async()=>{
    const supabaseClient = createClient();
    const user = await supabaseClient.auth.getUser();
    return user.data.user;
};

export const sendPasswordResetEmail = async(email:string)=>{
    const supabaseClient = createClient();
    const {error} = await supabaseClient.auth.resetPasswordForEmail(email,{
        redirectTo:'http://localhost:3000/Portal/reset-password?email='+email
    });
    return {error};
}
export const resetPassword = async(email:string, password:string)=>{
    const supabaseClient = createClient();
    const {error} = await supabaseClient.auth.updateUser({email, password});
    return {error};
}

export const signInToPortal = async(email:string, password:string)=>{
    const supabaseClient = createClient();
    const {data, error} = await supabaseClient.auth.signInWithPassword({email, password});
    return {data, error};
};

export const signOutFromPortal = async()=>{
    const supabaseClient = createClient();
    const {error} = await supabaseClient.auth.signOut();
    return {error};
}