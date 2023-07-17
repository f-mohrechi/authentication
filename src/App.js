import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { Signup } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Signup />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" transition={Slide} />
    </QueryClientProvider>
  );
}

export default App;
