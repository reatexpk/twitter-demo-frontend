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

const dataPhotos = [
  {
    id: 1,
    to: '/SomeMedia',
    img: `${process.env.PUBLIC_URL}/img/PAV1.png`,
    description: 'photo',
  },
  {
    id: 2,
    to: '/SomeMedia',
    img: `${process.env.PUBLIC_URL}/img/PAV2.png`,
    description: 'photo',
  },
  {
    id: 3,
    to: '/SomeMedia',
    img: `${process.env.PUBLIC_URL}/img/PAV3.png`,
    description: 'photo',
  },
  {
    id: 4,
    to: '/SomeMedia',
    img: `${process.env.PUBLIC_URL}/img/PAV4.png`,
    description: 'photo',
  },
  {
    id: 5,
    to: '/SomeMedia',
    img: `${process.env.PUBLIC_URL}/img/PAV5.png`,
    description: 'photo',
  },
  {
    id: 6,
    to: '/SomeMedia',
    img: `${process.env.PUBLIC_URL}/img/PAV6.png`,
    description: 'photo',
  },
];

const PhotosAndVideosInner = () => {
  const photosAndVideosList = dataPhotos.map(media => (
    <Link key={media.id} href={media.to}>
      <Image src={media.img} alt={media.descr} />
    </Link>
  ));

  return (
    <StyledPhotosAndVideosInner>
      {photosAndVideosList}
    </StyledPhotosAndVideosInner>
  );
};

export default PhotosAndVideosInner;
