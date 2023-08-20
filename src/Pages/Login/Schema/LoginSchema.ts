import { string, object } from "yup"

export const loginSchema = () => {
  return object().shape({
    password: string().required("Senha é obrigatória").typeError("Senha é obrigatória"),
    email: string().required("Email é obrigatório").typeError("Email é obrigatório")
  })
}

export const defaultValuesLogin = {
  password: "", 
  email: ""
}