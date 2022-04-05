import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
