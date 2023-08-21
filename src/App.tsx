import Router from "Routers/Router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApiErrorProvider } from "Contexts/ApiErrorContext";
import { AuthContextProvider } from "Contexts/AuthContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiErrorProvider>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </ApiErrorProvider>
    </QueryClientProvider>
  );
}

export default App;
