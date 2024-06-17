import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import { getPopularMovies } from "../services/movieService";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, loading, succeeded, failed
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPopularMovies(currentPage);
  }, [currentPage]);

  const fetchPopularMovies = async (page) => {
    setStatus("loading");
    try {
      const response = await getPopularMovies(page);
      setMovies(response.results);
      setTotalPages(response.total_pages);
      setStatus("succeeded");
    } catch (error) {
      setError(error.message);
      setStatus("failed");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <MovieCard
          movies={movies}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default HomePage;
