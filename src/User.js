import React from "react";
import styled from "styled-components";
import iconDelete from "./img/Icon_Delete.png";

const Container = styled.div`
  display: flex;
  margin: 10px 16px 0 16px;
  padding-bottom: 10px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
`;

const Avatar = styled.img`
  min-width: 48px;
  height: 48px;
`;

const Content = styled.div`
  margin-left: 12px;
  margin-top: 3px;
  font-size: 13px;
  /* For title reduction to "..." if its length too much */
  width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Name = styled.strong`
  color: #333333;
`;

const Nickname = styled.p`
  display: inline;
  margin: 0 0 0 4px;
  color: #697787;
`;

const DeleteButton = styled.button`
  background: transparent url(${iconDelete}) no-repeat;
  position: absolute;
  top: 2px;
  right: 0px;
  width: 8px;
  height: 8px;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  display: block;
  padding: 6px 22px 5px 22px;
  margin-top: 9px;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: #fff;
  color: #1da1f2;
  cursor: pointer;
`;

const User = props => {
  return (
    <Container>
      <Avatar src={props.src} alt={props.name} />
      <Content>
        <Name>{props.name}</Name>
        <Nickname>{props.nickname}</Nickname>
        <DeleteButton />
        <Button>Follow</Button>
      </Content>
    </Container>
  );
};

export default User;
