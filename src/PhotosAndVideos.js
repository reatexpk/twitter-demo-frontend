import React from 'react';
import styled from 'styled-components';

import iconVideos from './img/icon-videos.png';

import PhotosAndVideosInner from './PhotosAndVideosInner';

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

const PhotosAndVideos = () => (
  <StyledPhotosAndVideos>
    <Icon src={iconVideos} alt="Photos and videos" />
    <Link href="/media">
522 Photos and videos
    </Link>
    <PhotosAndVideosInner />
  </StyledPhotosAndVideos>
);

export default PhotosAndVideos;
