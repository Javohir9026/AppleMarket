import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./layout/Body/Body";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index path="/" element={<Body />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
