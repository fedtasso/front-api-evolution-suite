import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { VersionApiProvider } from "./context/VersionApiContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import Version1 from "./pages/Version1";

function App() {
  return (
    <BrowserRouter>
      <VersionApiProvider>
        <AuthProvider>
          <div className="d-flex flex-column min-vh-100">
            <Header />
            <main>
              {/* <Hero /> */}
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/v1" element={<Version1 />} />
              </Routes>
            </main>
          </div>
        </AuthProvider>
      </VersionApiProvider>
    </BrowserRouter>
  );
}

export default App;
