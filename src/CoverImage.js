import React from 'react';
import styled from 'styled-components';

const CoverImage = ({ src }) => {
  const StyledCoverImage = styled.div`
    background: url(${src}) no-repeat;
    background-size: cover;
    height: 380px;
  `;
  return <StyledCoverImage />;
};

export default CoverImage;
