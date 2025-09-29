import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { VersionApiProvider } from "./context/VersionApiContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import VersionApiPage from "./pages/VersionApiPage";



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <VersionApiProvider>
          <AuthProvider>
            <div className="d-flex flex-column min-vh-100">
              <Header />
              <main>
                {/* <Hero /> */}
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/v1" element={<VersionApiPage />} />
                </Routes>
              </main>
            </div>
          </AuthProvider>
        </VersionApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
