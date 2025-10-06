import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./features/Home";
import { Header } from "./features/Header";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Footer } from "./features/Footer";

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Wrong path</h1>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
