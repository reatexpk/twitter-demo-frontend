import React from "react";
import styled from "styled-components";

const StyledPAV = styled.div`
  margin-left: 2px;
  margin-top: 8px;
`;

const Link = styled.a``;

const Image = styled.img`
  width: 83px;
  height: 83px;
  margin-right: 5px;
`;

const PhotosAndVideosInner = props => {
  return (
    <StyledPAV>
      <Link href="">
        <Image src={props.imageSrc[0]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[1]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[2]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[3]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[4]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[5]} />
      </Link>
    </StyledPAV>
  );
};

export default PhotosAndVideosInner;
