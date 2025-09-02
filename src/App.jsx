import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { VersionApiProvider } from "./context/VersionApiContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <VersionApiProvider>
        <AuthProvider>
          <div className="d-flex flex-column min-vh-100">
            <Header />
          </div>
        </AuthProvider>
      </VersionApiProvider>
    </BrowserRouter>
  );
}

export default App;
