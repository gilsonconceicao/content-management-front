import { string, object } from "yup"

export const postmanualFormValidationSchema = () => {
  return object().shape({
    title: string().required("Título é obrigatório").typeError("Título: é obrigatório"), 
    description: string().required("Título é obrigatório").typeError("Título: é obrigatório")
  })
}

export const postManualFormdefaultValues = {
  title: null,
  description: null
}
