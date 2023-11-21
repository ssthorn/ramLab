import React, { useState } from 'react';

const SingleCharacterComponent = (props) => {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <div className="character-card">
            <img
                className='character-image'
                onClick={() => setDetailsOpen(!detailsOpen)}
                src={props.character.image}
                alt="portrait"
            ></img>
            {detailsOpen ? (
                <div className="character-card-details" onClick={() => setDetailsOpen(!detailsOpen)}>
                    <h2 className='character-name-heading'>{props.character.name}</h2>
                    <p><strong>Status:</strong> {props.character.status}</p>
                    <p><strong>Species:</strong> {props.character.species}</p>
                    <p><strong>Type:</strong> {props.character.type}</p>
                    <p><strong>Origin:</strong> 
                    <a href="{props.character.origin.url}">{props.character.origin.name}</a>
                    </p>
                    <p><strong>Last Seen:</strong> 
                    <a href="{props.character.location.url}">{props.character.location.name}</a></p>
                    {/* <p><strong>Episode:</strong> <a href="{props.character.episode}">{props.character.episode}</a></p> */}
                </div>
            ) : null}
        </div>
    );
};

export default SingleCharacterComponent;
