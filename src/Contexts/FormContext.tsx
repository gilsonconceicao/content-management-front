import { ReactNode, createContext, useContext } from "react";
import { Control, FieldErrors, UseFormGetValues, UseFormReset, UseFormSetValue, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormContextProps {
  setValue: UseFormSetValue<any>;
  watch: any;
  reset: UseFormReset<any>
  getValues: UseFormGetValues<any> | undefined;
  errors: FieldErrors<any>;
  control: Control<any, any>
}

const FormContext = createContext<IFormContextProps>({
  errors: {},
  setValue: (patchAssogmenr) => {},
  watch: () => { },
  reset: () => { },
  getValues: undefined,
  control: {} as any
});

interface IProvider {
  defaultValues: any;
  validationSchema: any;
  onSubmit: (value: any) => void;
  children: ReactNode;
}

export const FormProvider = ({ children, defaultValues, validationSchema, onSubmit }: IProvider) => {
  const { handleSubmit, setValue, watch, getValues, formState: { errors }, reset, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues
  });

  console.log('validationErrors: ',errors)

  return (
    <FormContext.Provider value={{
      errors,
      getValues,
      setValue,
      watch, 
      reset, 
      control
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext); 