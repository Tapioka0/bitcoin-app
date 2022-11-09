import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistroPage } from "./Pages/Registro";
import { OnboardingPage } from "./Pages/Onboarding";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/registro" element={<RegistroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
