import React from "react";

const Nosotros = () => {
  React.useEffect(() => {
    console.log("Use effect");
    document.title = "Use Efect";
  });
  return (
    <div>
      <h1>Nosotros</h1>
    </div>
  );
};

export default Nosotros;
