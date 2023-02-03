import { useEffect } from 'react';
import { useState } from 'react';

const Allmovies = () => {


    const [MostPopular, setMostPopular] = useState([]);
    const [MoviesForYou, setMoviesForYou] = useState([]);
    const [ComadyMovies, setComadyMovies] = useState([]);


    
    const [allMovies, setallMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movies')
            .then(res => res.json())
            .then(res => {
                setallMovies(res)
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

    return [allMovies, loading];

};

export default Allmovies;