import React, { useState, useEffect } from "react";

function PhotoFetcher() {
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []); // Always remember to put an empty array here!

  return <div>Hello useEffect!</div>;
}

export default PhotoFetcher;
