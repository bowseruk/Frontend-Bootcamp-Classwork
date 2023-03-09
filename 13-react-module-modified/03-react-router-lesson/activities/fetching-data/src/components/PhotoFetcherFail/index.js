import React, { useState, useEffect } from "react";

function PhotoFetcherFail() {
  let imgSrc = null;

  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
  )
    .then((res) => res.json())
    .then((data) => {
      imgSrc = data.photos[0].img_src;
    });

  console.log(`The image src is ${imgSrc}`);
  return <img src={imgSrc} />;
}

export default PhotoFetcherFail;
