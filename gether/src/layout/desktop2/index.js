import React from "react";
import Header from "../../pages/components/header";

import MiddleBody from "../../pages/components/middleBody1";
import Fooder from "../../pages/components/fooder";
import Reviews_card from "../../pages/components/reviews_card";
import GetherlyVideo from "../../pages/components/getherlyVideo";
import LowerBody from "../../pages/components/lowerBody";
const Desktop2 = () => {
  return (
    <>
      <div style={{ position: "relative", background: "white" }}>
        <Header></Header>

        <MiddleBody />
        <LowerBody />
        <GetherlyVideo />
        <Reviews_card />
        <Fooder />
      </div>
    </>
  );
};

export default Desktop2;
