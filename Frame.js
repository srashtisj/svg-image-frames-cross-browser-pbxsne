import React, { useState } from "react";
import "./style.scss";
import { brokenFrame, instagram, phone } from "./svg.js";
import instagramPost from './instagram-post.svg';
import instagramVideoStory from './instagram-video-story.svg';
import laptop from './laptop.svg'
import invitation from './invitation.svg'
import datacode from './datacode.svg'

const frames = {
  invitation: {
    frameImage: invitation,
    contentOffset: {
      top: 13,
      bottom: 7,
      left: 7,
      right: 7
    },
    frameSize: {
      width: 118,
      height: 164,
    },
  },
  laptop: {
    frameImage: laptop,
    contentOffset: {
      top: 7,
      bottom: 4,
      left: 13,
      right: 13
    },
    frameSize: {
      width: 161,
      height: 107,
    },
  },
  instagram: {
    frameImage: instagramPost,
    contentOffset: {
      top: 7,
      bottom: 31,
      left: 7,
      right: 7
    },
    frameSize: {
      width: 142,
      height: 166,
    }
  },
  phone: {
    frameImage: instagramVideoStory,
    contentOffset: {
      top: 7,
      bottom: 7,
      left: 7,
      right: 7
    },
    frameSize: {
      width: 90,
      height: 165,
    }
  },
  datacode: {
    frameImage: datacode,
    contentOffset: {
      top: 7,
      bottom: 31,
      left: 7,
      right: 7
    },
    frameSize: {
      width: 142,
      height: 166,
    }
  },
};

export default ({ type, children }) => {
  const frame = frames[type];
  const frameSize = frame.frameSize;
  const [isActive, setIsActive] = useState(null);
  // const handleMouseOver = () => {
  //   setIsActive(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsActive(false);
  // };

  return (
    <div
      style={...frameSize}
      // onMouseOver={handleMouseOver}
      // onMouseLeave={handleMouseLeave}
      className="wrapper"
    >
      <img style={...frameSize}className="frame" src={frame.frameImage}/>
      <img style={...frameSize} className="frame shadow" src={frame.frameImage}/>
      <div className="content" style={{ ...frame.contentOffset }}>
        {children}
      </div>
    </div>
  );
};
