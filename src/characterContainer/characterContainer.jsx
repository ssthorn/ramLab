import React, { useState, useEffect } from 'react';
import SingleCharacterComponent from './singleCharacterComponent/singleCharacterComponent';

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const loadCharacters = async (page) => {
        try {
            const apiResponse = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const parsedResponse = await apiResponse.json();
            setCharacters(parsedResponse.results);
            console.log(parsedResponse.results);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    const handleLoadNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleLoadPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    // Load characters on component mount and when currentPage changes
    useEffect(() => {
        loadCharacters(currentPage);
    }, [currentPage]);

    return (
        <div>
            <div className='page-heading-wrapper'>
                <button id="load-previous-page" onClick={handleLoadPreviousPage}>Load Previous Page</button>
                <button id="load-next-page" onClick={handleLoadNextPage}>Load Next Page</button>
            </div>

            {characters.map((character) => (
                <div className="character-grid" key={character.id}>
                    <SingleCharacterComponent character={character} />
                </div>
            ))}
        </div>
    );
};

export default CharacterContainer;
