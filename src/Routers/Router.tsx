import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { HomeRouter } from "./HomeRouter";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRouter />}>
          <Route index element={<>Esse é o início</>}/>
          <Route path="/teste" element={<h1>Teste</h1>} />
          <Route path="/teste3" element={<h1>Teste 3</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router; 