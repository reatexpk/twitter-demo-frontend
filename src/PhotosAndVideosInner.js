import React from 'react';
import styled from 'styled-components';

const StyledPhotosAndVideosInner = styled.div`
  margin-left: 2px;
  margin-top: 8px;
`;

const Link = styled.a``;

const Image = styled.img`
  width: 83px;
  height: 83px;
  margin-right: 5px;
`;

const PhotosAndVideosInner = ({ imageSrc }) => (
  <StyledPhotosAndVideosInner>
    <Link href="/">
      <Image src={imageSrc[0]} />
    </Link>
    <Link href="/">
      <Image src={imageSrc[1]} />
    </Link>
    <Link href="/">
      <Image src={imageSrc[2]} />
    </Link>
    <Link href="/">
      <Image src={imageSrc[3]} />
    </Link>
    <Link href="/">
      <Image src={imageSrc[4]} />
    </Link>
    <Link href="/">
      <Image src={imageSrc[5]} />
    </Link>
  </StyledPhotosAndVideosInner>
);

export default PhotosAndVideosInner;
