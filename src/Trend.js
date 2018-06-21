import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTrend = styled.div`
  margin: 0 16px;
  padding: 5px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 20px;
  font-size: 15px;
  font-weight: bold;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.p`
  margin: 0;
  color: #697787;
  line-height: 20px;
  font-size: 15px;
`;

const Trend = props => {
  return (
    <StyledTrend>
      <StyledLink to={`/search?q=${props.title}`}>{props.title}</StyledLink>
      {props.text && <Text>{props.text}</Text>}
      {props.count && <Text>{props.count} Tweets</Text>}
    </StyledTrend>
  );
};

export default Trend;
