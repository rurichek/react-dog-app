import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <h1>Here is a list of dog names. </h1>
            <div className="do-list-container">
                {dogs.map(dog => (
                    <div key={dog.name} className="dog">
                            <h2>{dog.name}</h2>
                            <img src={dog.src} alt={`Cute ${dog.name}`} style={{ width: '200px' }} />
                            <br></br>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>Learn more about {dog.name}</Link>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;