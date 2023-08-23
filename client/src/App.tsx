import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
        <Footer />
      </div>
      <h1 className='my-5 font-sans font-bold text-2xl text-center'>Vite + React</h1>
      <p className="underline text-cyan-500 font-mono text-center">
        Click on the Vite and React logos to learn more
      </p> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
