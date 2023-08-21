import { useMutation } from "@tanstack/react-query";
import { IApiTypeError } from "Contexts/ApiErrorContext";
import { PayloadLogin, loginbyEmailAndPassword } from "Services/auth/auth";

type ResultMutationType = ((data: unknown, variables: void, context: unknown) => unknown) | undefined

export function useLoginMutation(onSuccess?: ResultMutationType, onError?: (error: IApiTypeError) => void) {
  return useMutation({
    mutationFn: async (values) => {
      const payload = values as unknown as PayloadLogin; 
      const {data} = await loginbyEmailAndPassword({email: payload.email, password: payload.password}); 
      return data; 
    }, 
    onSuccess, 
    onError
  })
};