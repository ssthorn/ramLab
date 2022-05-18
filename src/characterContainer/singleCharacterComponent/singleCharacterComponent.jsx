import { useState, useEffect } from 'react'

const SingleCharacterComponent = (props) => {
    // useEffect(() => {
    //     console.log(props.character.name)
    //     console.log(props.character.species)
    //     console.log(props.character.origin)
    //   });
    const [detailsOpen, setDetailsOpen] = useState(false)
    return (
        <div className="character-card">
            <img onClick={()=>setDetailsOpen(!detailsOpen)} src={props.character.image} alt="portrait"></img>
            { detailsOpen 
                ?
                    <div className="character-card-details">
                        <h2>{props.character.name}</h2>
                        <p>{props.character.name} is a {props.character.species} from {props.character.origin.name}. Last seen: {props.character.location.name}</p>
                    </div>
                :
                    null
            }
        </div>
    )
}
export default SingleCharacterComponent