import React from "react";
import styled from "styled-components";
import iconPinned from "./img/Icon_Pinned.svg";

const PinnedTweet = styled.div`
  display: flex;
  margin: 8px 0 4px 48px;
`;

const PinnedIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const PinnedText = styled.p`
  margin: 0 12px;
  font-size: 12px;
  letter-spacing: -0.175385px;
  color: #707e88;
`;

const Avatar = styled.img`
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 5px 10px 0 11px;
`;

const Container = styled.div`
  display: flex;
`;

const Body = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.p`
  margin: 0 0 0 5px;
  padding: 0;
  line-height: 21px;
  font-size: 14px;
  letter-spacing: -0.219231px;
  color: #697787;
`;

const Poster = styled.h6`
  margin: 0;
  line-height: 30px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #292f33;
`;

const Text = styled.div`
  margin-bottom: 17px;
  line-height: 30px;
  font-size: 25px;
  letter-spacing: 0.38px;
  color: #292f33;
`;

const TextSmall = styled.div`
  margin-bottom: 17px;
  line-height: 22px;
  font-size: 16px;
  letter-spacing: -0.219231px;
  color: #292f33;
`;

const Attachment = styled.img`
  max-width: 487px;
`;

const Tweet1 = styled.img`
  width: 487px;
  height: 253px;
`;
const Tweet3 = styled.img`
  width: 126px;
  height: 126px;
  margin-right: 9px;
`;

const PreviewWrapper = styled.div`
  display: flex;
  margin: 11px 0 8px 0;
  border: 1px solid #e1e8ed;
`;
const PreviewBlock = styled.div`
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #000000;
`;
const PreviewBlockHeader = styled.h6`
  margin: 0;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #000000;
`;
const PreviewBlockParag = styled.p`
  margin: 0;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #000000;
`;
const PreviewBlockSource = styled.p`
  margin: 0;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #697787;
`;

const Tweet = props => {
  if (props.pinned && props.attachment) {
    return (
      <div>
        <PinnedTweet>
          <PinnedIcon src={iconPinned} />
          <PinnedText>Pinned Tweet</PinnedText>
        </PinnedTweet>
        <Container>
          <Avatar src={process.env.PUBLIC_URL + "/img/TweetAvatar.png"} />
          <Body>
            <Header>
              <Poster>{props.name}</Poster>
              <Info>
                {props.nickname} • {props.date}
              </Info>
            </Header>
            <Text>{props.text}</Text>
            <Attachment
              src={process.env.PUBLIC_URL + "/img/" + props.attachment}
            />
          </Body>
        </Container>
      </div>
    );
  } else if (props.pinned) {
    return (
      <div>
        <PinnedTweet>
          <PinnedIcon src={iconPinned} />
          <PinnedText>Pinned Tweet</PinnedText>
        </PinnedTweet>
        <Container>
          <Avatar src={process.env.PUBLIC_URL + "/img/" + props.avatar} />
          <Body>
            <Header>
              <Poster>{props.name}</Poster>
              <Info>
                {props.nickname} • {props.date}
              </Info>
            </Header>
            <Text>{props.text}</Text>
          </Body>
        </Container>
      </div>
    );
  } else if (props.attachment) {
    return (
      <Container>
        <Avatar src={process.env.PUBLIC_URL + "/img/" + props.avatar} />
        <Body>
          <Header>
            <Poster>{props.name}</Poster>
            <Info>
              {props.nickname} • {props.date}
            </Info>
          </Header>
          <Text>{props.text}</Text>
          <Attachment
            src={process.env.PUBLIC_URL + "/img/" + props.attachment}
          />
        </Body>
      </Container>
    );
  } else {
    return (
      <Container>
        <Avatar src={process.env.PUBLIC_URL + "/img/" + props.avatar} />
        <Body>
          <Header>
            <Poster>{props.name}</Poster>
            <Info>
              {props.nickname} • {props.date}
            </Info>
          </Header>
          <Text>{props.text}</Text>
        </Body>
      </Container>
    );
  }
};

export default Tweet;
