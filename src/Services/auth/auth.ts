import { api } from "Services/api/api";

export type PayloadLogin = {
  email: string, 
  password: string
}

export async function loginbyEmailAndPassword(payload: PayloadLogin) {
  return await api({ endpoint: "/Auth", method: "POST", payload }); 
}