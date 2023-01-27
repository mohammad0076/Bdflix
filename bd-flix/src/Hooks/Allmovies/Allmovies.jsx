import { useEffect } from 'react';
import { useState } from 'react';

const Allmovies = () => {
    
    const [MostPopular, setMostPopular] = useState([]);
    const [MoviesForYou, setMoviesForYou] = useState([]);
    const [ComadyMovies, setComadyMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/mostPopularMovies')
            .then(res => res.json())
            .then(res => {
                setMostPopular(res)
                setLoading(false)
            });
    }, [])

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/MoviesForYou')
            .then(res => res.json())
            .then(res => {
                setMoviesForYou(res)
                setLoading(false)
            });
    }, [])

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/comedies')
            .then(res => res.json())
            .then(res => {
                setComadyMovies(res)
                setLoading(false)
            });
    }, [])

    return [MostPopular, MoviesForYou, ComadyMovies, loading];
};

export default Allmovies;