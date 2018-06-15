import styled from "styled-components";

const url = process.env.PUBLIC_URL + "/img/CoverImage.png";

const CoverImage = styled.div`
  background: url(${url}) no-repeat;
  height: 380px;
`;

export default CoverImage;
