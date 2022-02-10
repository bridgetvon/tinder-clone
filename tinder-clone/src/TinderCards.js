import {React, useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import db from './firebase';



function TinderCards() {
    //set people says remmeber state has changed re paint the screen 
const [people, setPeople] = useState([
    {
        name: 'jennifer',
        url: 'https://images.app.goo.gl/LCaSZHFvnmi1Ei1K7',
    }
]);

//use effect peace of code that runs on condition
// useEffect(() => {
//onsnapshot takes picture of database and gives documents in database at that time
    // db.collection('people').onSnapshot(snapshot => (
        //map the documents and set it into the people array 
//         setPeople(snapshot.docs.map(doc => doc.data()))
//     ))
// }, [people]);
//^when blank will run once when component runs but never again
//people people in array so it runs when the variable of people change aka are added to the database


  return (
    <div>
        <h1>TinderCards</h1>
        <div className='card-container'>
        {people.map(person => (
            <TinderCard
            className='swipe'
            //keys are unique identifier for a unique item in a list this helps react re render a list 
            //makes your app faster 
            key={person.name}
            preventSwipe={['up', 'down']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})`}}
                className='card'
                >
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards