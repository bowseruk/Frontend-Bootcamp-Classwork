import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

function App() {
  // Get the state info
  const [friends, setFriends] = useState(friendsData);

  const removeFriend = id => setFriends([...friends.filter((friend) => friend.id !== id)])

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map((friend) => (
        
      ))}
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />
    </Wrapper>
  );
}

export default App;
