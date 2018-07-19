// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Trend = ({ title, count, text }: { title: string, count: ?number, text: ?string }) => (
  <StyledTrend>
    <StyledLink to={`/search?q=${title}`}>
      {title}
    </StyledLink>
    {text && (
    <Text>
      {text}
    </Text>
    )}
    {count && (
    <Text>
      {count}
      {' '}
Tweets
    </Text>
    )}
  </StyledTrend>
);

export default Trend;
