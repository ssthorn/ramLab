import '../App.css';
import {useState} from 'react'
import SingleCharacterComponent from './singleCharacterComponent/singleCharacterComponent'

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([])
    const loadCharacters = async () => {
        const apiResponse = await fetch("https://rickandmortyapi.com/api/character")
        const parsedResponse = await apiResponse.json();
        setCharacters(parsedResponse.results)
        console.log(parsedResponse.results)
    }
    return(
        <div>
           <h2>Characters</h2> 
            <button onClick={loadCharacters}>get characters</button>
            {characters.map((character)=>{
                return (
                    <div className="character-grid">   
                        <SingleCharacterComponent 
                            key={character.id} 
                            character={character}>
                        </SingleCharacterComponent>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterContainer;