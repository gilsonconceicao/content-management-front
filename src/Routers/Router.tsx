import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { PrivateRouters } from "./PrivateRouters";
import { LoginContainer } from "Pages/Login/LoginContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouters />}>
          <Route index element={<>Esse é o início</>} />
          <Route path="/teste" element={<h1>Teste</h1>} />
          <Route path="/teste3" element={<h1>Teste 3</h1>} />
        </Route>
        <Route path='/login' element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router; 