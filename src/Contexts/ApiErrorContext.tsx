import { FC, ReactNode, createContext, useContext, useState } from "react";

interface IApiResponseError {
   data: {
      message: string;
      error: string
   };
}

export interface IApiTypeError {
   message: string;
   code: string;
   response: IApiResponseError
}

interface IApiErrorContextProps {
   submitError: IApiTypeError | undefined;
   setSubmitError: (value: IApiTypeError | undefined) => void;
}

const ApiErrorContext = createContext<IApiErrorContextProps>({
   setSubmitError: () => { },
   submitError: undefined
});

interface IProvider {
   children: ReactNode;
}

export const ApiErrorProvider: FC<IProvider> = ({ children }) => {
   const [submitError, setSubmitError] = useState<IApiTypeError | undefined>(undefined);
   console.log('newValues: ', submitError)
   return (
      <ApiErrorContext.Provider
         value={{
            setSubmitError,
            submitError
         }}
      >
         {children}
      </ApiErrorContext.Provider>
   )
}

export const useApiError = () => useContext(ApiErrorContext); 