import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <Card name="Sponge Bob" occupation="Fry Cook" location="A Pinapple Under the Sea" img="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"  />
      <Card name="Mr. Krabs" occupation="Restaurant Owner" location="A Giant Anchor" img="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"  />
      <Card name="Squidward" occupation="Cashier" location="An Easter Island Head" img="https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"  />
    </Wrapper>
  );
}

export default App;
