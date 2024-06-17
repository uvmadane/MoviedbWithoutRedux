import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../services/movieService";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setStatus("loading");

        const query = new URLSearchParams(location.search).get("query");
        if (!query) {
          setStatus("idle");
          return;
        }

        const response = await searchMovies(query, currentPage);

        if (!response || response.results.length === 0) {
          setStatus("idle");
          setError("No results found.");
          return;
        }

        setSearchResults(response.results);
        setTotalPages(response.total_pages);
        setStatus("succeeded");
      } catch (error) {
        console.error("Error fetching search results:", error);
        setStatus("failed");
        setError("Failed to fetch search results.");
      }
    };

    fetchSearchResults();
  }, [location.search, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <MovieCard
          movies={searchResults}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default SearchPage;
