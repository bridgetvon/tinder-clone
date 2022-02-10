import {React, useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";



function TinderCards() {
    //set people says remmeber state has changed re paint the screen 
const [people, setPeople] = useState([
    {
      name: 'steve',
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fdc%2FSteve_Jobs_Headshot_2010-CROP_%2528cropped_2%2529.jpg%2F800px-Steve_Jobs_Headshot_2010-CROP_%2528cropped_2%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSteve_Jobs&tbnid=B5sOXd0IHEHJjM&vet=12ahUKEwjW_5DkvfT1AhXQXs0KHW5BAgEQMygBegUIARDWAQ..i&docid=cvmgKjU7_-0ZBM&w=800&h=774&q=steve%20jobs&ved=2ahUKEwjW_5DkvfT1AhXQXs0KHW5BAgEQMygBegUIARDWAQ",
    },
    {
      name: 'jen',
      url: "https://www.google.com/search?q=jennifer+anniston&rlz=1C5CHFA_enUS964US969&sxsrf=APq-WBuLjK-1ByFSqB8SchpCENkJyG1bIQ:1644473683081&tbm=isch&source=iu&ictx=1&vet=1&fir=kPQs9iRbeozj1M%252Cd3vpZOEi2wSlOM%252C_%253Bz8sUbwsTGTrIjM%252C3UFEQ38MRcyiwM%252C_%253BVxU2iZsaH4LkBM%252CTFgrJZ8key6CdM%252C_%253BL5vjySfaRjOsuM%252CwcuzfMiS7etWzM%252C_&usg=AI4_-kTnN7TpnBKMXolAvRZ8NZE1N-fNfA&sa=X&ved=2ahUKEwiwr-PtvfT1AhUDjIkEHZnhDSYQ_h16BAgZEAE#imgrc=z8sUbwsTGTrIjM",
    },
]);

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