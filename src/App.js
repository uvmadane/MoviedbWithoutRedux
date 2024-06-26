import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TopRatedPage from "./pages/TopRatedPage"
import UpcomingPage from "./pages/UpcomingPage"
import MovieDetailPage from "./pages/MovieDetailPage"
import SearchPage from "./pages/SearchPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movieDetails/:id" element={<MovieDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
export default App
