import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
    let { name } = useParams();
    let currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    
    return (
      <div>
        <h1> {currentDog.name} </h1>
        <h2> Age: {currentDog.age} </h2>
        <img src={currentDog.src} style={{ width: '200px' }} />
        <h2> Here are some facts about {currentDog.name}: </h2>
        <ul>{currentDog.facts.slice(0,2).map((fact, index) => (
            <li key={index}>{fact}</li> 
        ))}   
        </ul>
      </div>
    );
  }

export default DogDetails