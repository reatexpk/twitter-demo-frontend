import styled from 'styled-components';

export default styled.div`
  background: url('${({ src }) => src}') no-repeat;
  background-size: cover;
  height: 380px;
`;
