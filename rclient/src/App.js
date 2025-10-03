import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./features/Home";
import { Header } from "./features/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* <Container maxWidth="xl" sx={{ mt: "88px" }}></Container> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Wrong path</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
