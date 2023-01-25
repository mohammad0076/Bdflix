import React from 'react';
import Allmovies from '../../Hooks/Allmovies/Allmovies';
import AllmoviesCard from './AllmoviesCard';

const Movies = () => {
    const [allMovies, loading] = Allmovies();
    return (
        <>
            <h2 className='p-3 font-semibold text-white'> All Movies </h2>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2'>
                {
                    loading ? <div class="flex h-screen justify-center">
                        <p class="text-center font-bold">Loading...</p>
                    </div> :
                        <>
                            {
                                allMovies.map(data => <AllmoviesCard loading={loading} allMovies={data}></AllmoviesCard>)
                            }
                    
                        </>
                }

            </div>
        </>
    );
};

export default Movies;