import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { VersionApiProvider } from "./context/VersionApiContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import VersionApiPage from "./pages/VersionApiPage";
import { API_CONFIG } from "./config/apiConfig";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <VersionApiProvider>
          <AuthProvider>
            <div className="d-flex flex-column min-vh-100">
              <ScrollToTop/>
                <Header />
                <main>
                  {/* <Hero /> */}
                  <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />

                    {/* Rutas de páginas para cada version */}
                    {Object.entries(API_CONFIG).map(([key, config]) => {
                      if (key === "home") return null;

                      return (
                        <Route
                          key={key}
                          path={`/${key}`}
                          element={<VersionApiPage />}
                        />
                      );
                    })}
                  </Routes>
                </main>
                <Footer/>
            </div>
          </AuthProvider>
        </VersionApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
