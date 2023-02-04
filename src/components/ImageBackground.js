import React from "react";

export default function ImageBackground({ image, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "96vh",
        paddingTop: "5vh"
      }}
    >
      {children}
    </div>
  );
}
