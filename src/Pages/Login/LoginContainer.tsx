import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultValuesLogin, loginSchema } from "./Schema/LoginSchema"
import { TextFormField } from "Components/Forms/TextFormField/TextFormField"
import { Button, Stack, Typography } from "@mui/material"
import { useLoginMutation } from "Hooks/Auth/LoginHook"
import { IApiTypeError, useApiError } from "Contexts/ApiErrorContext"
import { Error } from "Components/Error/Error"
import { useAuth } from "Contexts/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"

export const LoginContainer = () => {
  const { setSubmitError, submitError } = useApiError();
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const {
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema()),
    defaultValues: defaultValuesLogin
  });

  const onSuccess = (values: any) => {
    const token = values?.token;
    if (!!token) login(token);
    setSubmitError(undefined);
    navigate('/');
  }
  const onError = (error: IApiTypeError) => {
    setSubmitError(error);
  }

  const { mutate, isError, isLoading } = useLoginMutation(onSuccess, onError);

  const onSubmit = (data: any) => {
    mutate(data);
  };

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: 10 }}>
      <Stack spacing={2} maxWidth={500} justifyContent='center' m='20vh auto'>
        <Typography variant="h2">Login</Typography>
        <TextFormField
          label="Email"
          name="email"
          fullWidth
          required
        />
        <TextFormField
          label="Senha"
          fullWidth
          required
          typeInput="password"
          name="password"
        />
        {isError && <Error error={submitError!} />}
        <Button variant="contained" disabled={isLoading} sx={{ p: 1 }} type="submit">Entrar</Button>
      </Stack>
    </form>
  )
}