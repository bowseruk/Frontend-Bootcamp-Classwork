import React, { useState } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friendsData from "./friends.json";

function App() {
  // Here we set the state for friends and also create a function to update it.
  // Set the initial value to friendsData imported from the json file
  const [friends, setFriends] = useState(friendsData);

  const removeFriend = (id) => {
    // Filter friends for friends with an id not equal to the id being removed
    const newFriends = friends.filter((friend) => friend.id !== id);
    // Set friends equal to the new friends array
    setFriends([...newFriends]);
  };

  // Map over friends and render a FriendCard component for each friend object
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map((friend) => (
        <FriendCard
          removeFriend={removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </Wrapper>
  );
}

export default App;
