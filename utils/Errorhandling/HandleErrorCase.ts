import { AuthError } from "@supabase/supabase-js";
import { AuthErrorCases } from "./Errorhandler";

export const HandleAuthErrorCase = (error: AuthError) => {
    const errorCase = AuthErrorCases.find((item) => item.code === error.code);
    return errorCase ? errorCase.message : 'An error occurred';
}