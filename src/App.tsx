import { BrowserRouter, Route, Routes } from "react-router-dom";

import { resources } from "@/providers";

import { CommonLayout } from "./layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeams from "./pages/OurTeams";
import Marketplace from "./pages/Marketplace";
import Roadmap from "./pages/Roadmap";
import Whitepaper from "./pages/Whitepaper";

const App = () => {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route index element={<Marketplace />} />
          <Route path={resources.home} element={<Home />} />
          <Route path={resources.aboutUs} element={<AboutUs />} />
          <Route path={resources.ourTeams} element={<OurTeams />} />
          <Route path={resources.marketplace} element={<Marketplace />} />
          <Route path={resources.roadmap} element={<Roadmap />} />
          <Route path={resources.whitepaper} element={<Whitepaper />} />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  );
};

export default App;
