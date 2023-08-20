import { useMutation } from "@tanstack/react-query";
import { PayloadLogin, loginbyEmailAndPassword } from "Services/auth/auth";

type ResultMutationType = ((data: unknown, variables: void, context: unknown) => unknown) | undefined

export function useLoginMutation(onSuccess?: ResultMutationType, onError?: ResultMutationType) {
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