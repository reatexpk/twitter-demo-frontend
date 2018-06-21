import React from "react";
import styled from "styled-components";

import iconVideos from "./img/icon-videos.png";

import PhotosAndVideosInner from "./PhotosAndVideosInner";

const StyledPhotosAndVideos = styled.div`
  margin: 18px 0 31px 5px;
`;

const Icon = styled.img`
  width: 12px;
  height: 15px;
  vertical-align: middle;
`;

const Link = styled.a`
  margin-left: 8px;
  text-decoration: none;
  font-size: 14px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const PhotosAndVideos = () => {
  return (
    <StyledPhotosAndVideos>
      <Icon src={iconVideos} alt="Photos and videos" />
      <Link href="">522 Photos and videos</Link>
      <PhotosAndVideosInner
        imageSrc={[
          process.env.PUBLIC_URL + "/img/PAV1.png",
          process.env.PUBLIC_URL + "/img/PAV2.png",
          process.env.PUBLIC_URL + "/img/PAV3.png",
          process.env.PUBLIC_URL + "/img/PAV4.png",
          process.env.PUBLIC_URL + "/img/PAV5.png",
          process.env.PUBLIC_URL + "/img/PAV6.png"
        ]}
      />
    </StyledPhotosAndVideos>
  );
};

export default PhotosAndVideos;
