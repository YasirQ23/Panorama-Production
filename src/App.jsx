import React, { useState, useEffect } from "react";

function App() {
  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => {
        setCurrentMsg(data.msg);
      });
  }, []);

  return (
      <h1>{currentMsg}</h1>
  );
}

export default App;