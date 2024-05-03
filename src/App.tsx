import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

