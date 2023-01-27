import { useEffect } from 'react';
import { useState } from 'react';

const Allmovies = () => {
    
    const [allMovies, setallMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(res => {
                setallMovies(res)
                setLoading(false)
            });
    }, [])

    return [allMovies, loading];
};

export default Allmovies;