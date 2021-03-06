import React from "react";

import GalleryBody from "../gallery/gal_body";
import Welcome from "./welcome/welcome";

import sampleGallery from "./sample-gallery.json";

const landing_page = (props) => {
  return (
    <div>
      <Welcome />
      <GalleryBody
        title={sampleGallery.title}
        description={sampleGallery.description}
        data={sampleGallery.songData}
      />
    </div>
  );
};

export default landing_page;
