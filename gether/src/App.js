import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MiddleBody1 from "./pages/components/middleBody1";
import Desktop1 from "./layout/desktop1";
import Fooder from "./pages/components/fooder";
import Reviews_card from "./pages/components/reviews_card";
import GetherlyVideo from "./pages/components/getherlyVideo";
import LowerBody from "./pages/components/lowerBody";
import UpperBody from "./pages/components/upperBody";
import Header from "./pages/components/header";
import Desktop2 from "./layout/desktop2";
import Desktop2_UpperBody from "./pages/desktop2UpperBody";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Desktop1 />} />
          <Route path="/h" element={<Header />} />
          <Route path="/u" element={<UpperBody />} />
          <Route path="/d1" element={<MiddleBody1 />} />
          <Route path="/f" element={<Fooder />} />
          <Route path="/r" element={<Reviews_card />} />
          <Route path="/d2" element={<Desktop2 />} />
          <Route path="/dd" element={<Desktop2_UpperBody />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
