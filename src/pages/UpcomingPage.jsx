import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import { getUpcomingMovies } from "../services/movieService";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        setStatus('loading');
        const data = await getUpcomingMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setStatus('succeeded');
      } catch (error) {
        setError(error.message);
        setStatus('failed');
      }
    };

    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
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

export default Upcoming;
