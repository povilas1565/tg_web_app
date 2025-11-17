import React from "react";
import PreviewCard from "./PreviewCard.jsx";
import Scenes from "./Scenes.jsx";

const PreviewColumn = () => {
  return (
    <section className="tg-left">
      <PreviewCard />
      <Scenes />
    </section>
  );
};

export default PreviewColumn;
