import { string, object } from "yup"

export const postFormValidationSchema = () => {
  return object().shape({
    postId: string().required("post é obrigatório").typeError("Post: é obrigatório")
  })
}

export const postFormdefaultValues = {
  postId: {label: "Teste", value: "Element"}
}
