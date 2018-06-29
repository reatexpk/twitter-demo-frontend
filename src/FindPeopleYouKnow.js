import React from 'react';
import styled from 'styled-components';
import iconPeople from './img/icon-people.png';

const StyledFindPeopleYouKnow = styled.a`
  display: flex;
  align-items: baseline;
  margin: 0 14px 0 14px;
  padding: 23px 0 19px 0;
  text-decoration: none;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 16px;
  height: 12px;
  margin-right: 6px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #1da1f2;
`;

const FindPeopleYouKnow = () => (
  <StyledFindPeopleYouKnow href="/search_people">
    <Image src={iconPeople} />
    <Text>
Find people you know
    </Text>
  </StyledFindPeopleYouKnow>
);

export default FindPeopleYouKnow;
