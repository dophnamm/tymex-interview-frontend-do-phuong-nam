import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { CommonLayout } from "./layout";

function App() {
  return (
    <CommonLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CommonLayout>
  );
}

export default App;
