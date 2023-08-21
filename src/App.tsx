import Router from "Routers/Router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApiErrorProvider } from "Contexts/ApiErrorContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiErrorProvider>
        <Router />
      </ApiErrorProvider>
    </QueryClientProvider>
  );
}

export default App;
