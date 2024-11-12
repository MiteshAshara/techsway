import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../components/movies.json';

function Home({ searchTerm }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesData);
    }, []);

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-4">
            <h4 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>
                Featured Movies
            </h4>
            <div className="row">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <MovieCard 
                            key={index} 
                            title={movie.title} 
                            link={movie.link} 
                            image={movie.image} 
                            category={movie.category} 
                        />
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p style={{ fontSize: '1.5rem', color: '#666' }}>No movies found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;