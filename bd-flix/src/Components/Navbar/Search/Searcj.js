import React, { useEffect } from 'react';
import { useState } from 'react';

const Searcj = () => {

    const [AllMoviesSearch, setData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    const [searchApiData, setSearchApiData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allsearch')
            .then(res => res.json())
            .then(res => {
                setData(res)
                setSearchApiData(res)

            });
    }, [])
 




    const handleFilter = (e) => {
        if (e.target.value === '') {
            setData(searchApiData)
        }
        else {
            const FilterData = searchApiData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(FilterData)
        }
        setFilterVal(e.target.value)
    }





    return (
        <>
            <h2>Phone book</h2>
          
            <input  value={filterVal} onInput={(e) => handleFilter(e)} />
            <h2>Numbers</h2>
            {AllMoviesSearch.map((person) => {
                return (
                    <p key={person.id}>
                        {person.title}
                    </p>
                );
            })}
        </>
    );
};

export default Searcj;