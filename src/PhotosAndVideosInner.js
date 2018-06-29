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

const PhotosAndVideosInner = () => {
  const dataPhotos = [
    {
      to: '/SomeMedia',
      img: `${process.env.PUBLIC_URL}/img/PAV1.png`,
      description: 'photo',
    },
    {
      to: '/SomeMedia',
      img: `${process.env.PUBLIC_URL}/img/PAV2.png`,
      description: 'photo',
    },
    {
      to: '/SomeMedia',
      img: `${process.env.PUBLIC_URL}/img/PAV3.png`,
      description: 'photo',
    },
    {
      to: '/SomeMedia',
      img: `${process.env.PUBLIC_URL}/img/PAV4.png`,
      description: 'photo',
    },
    {
      to: '/SomeMedia',
      img: `${process.env.PUBLIC_URL}/img/PAV5.png`,
      description: 'photo',
    },
    {
      to: '/SomeMedia',
      img: `${process.env.PUBLIC_URL}/img/PAV6.png`,
      description: 'photo',
    },
  ];

  const photosAndVideosList = dataPhotos.map(arg => (
    <Link key={Math.random()} href={arg.to}>
      <Image src={arg.img} alt={arg.descr} />
    </Link>
  ));

  return (
    <StyledPhotosAndVideosInner>
      {photosAndVideosList}
    </StyledPhotosAndVideosInner>
  );
};

export default PhotosAndVideosInner;
