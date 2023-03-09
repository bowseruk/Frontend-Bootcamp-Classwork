import React from "react";
import PhotoFetcherFail from "./components/PhotoFetcherFail";
import PhotoFetcher from "./components/PhotoFetcher";
import PhotoFetcherComplete from "./components/PhotoFetcherComplete";

function App() {
  return (
    <div style={{ textAlign: "center", maxHeight: "100vh" }}>
      <PhotoFetcherFail />
    </div>
  );
}

export default App;
