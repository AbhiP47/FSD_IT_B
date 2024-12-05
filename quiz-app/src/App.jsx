import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "../src/data";
import Quiz from "./components/quiz";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Quiz />
      <qBank />
      <Footer />
    </>
  );
}

export default App;
