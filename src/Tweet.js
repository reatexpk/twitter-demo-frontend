import React from "react";
import styled from "styled-components";
import iconPinned from "./img/Icon_Pinned.svg";
import commentsIcon from "./img/Icon_Comments.svg";
import retweetsIcon from "./img/Icon_Retweet.svg";
import lovesIcon from "./img/Icon_Loves.svg";
import lovedIcon from "./img/Icon_ Loved.png";
import envelopeIcon from "./img/Icon_Envelope.svg";

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
  color: #707e88;
`;

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e8ed;
`;

const Avatar = styled.img`
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 5px 10px 0 11px;
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
  color: #697787;
`;

const Poster = styled.h6`
  margin: 0;
  line-height: 30px;
  font-size: 15px;
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
  color: #292f33;
`;

const Attachment = styled.img`
  max-width: 487px;
`;

const Actions = styled.div`
  margin: 12px 0;
  display: flex;
`;

const Icon = styled.img`
  height: 16px;
  margin-right: 11px;
`;

const Comments = styled.div`
  margin-right: 63px;
  line-height: normal;
  font-size: 13px;
  font-weight: bold;
  color: #667580;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Retweets = Comments.extend`
  color: ${props => (props.loved ? "#E2264D" : "#667580")};
`;
const Loves = Comments.extend`
  color: ${props => (props.loved ? "#E2264D" : "#667580")};
`;
const Envelop = Comments;

const Preview = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  margin-right: 11px;
`;
const PreviewImage = styled.img`
  margin-right: 9px;
`;
const PreviewBody = styled.div`
  line-height: 22px;
  font-size: 15px;
  color: #000000;
`;
const PreviewHeader = styled.h6`
  margin: 0;
  line-height: 22px;
  font-size: 15px;
  color: #000000;
`;
const PreviewText = styled.p`
  margin: 0;
  line-height: 22px;
  font-size: 15px;
  color: #000000;
`;
const PreviewSource = styled.p`
  margin: 0;
  line-height: 22px;
  font-size: 15px;
  color: #697787;
`;

const Tweet = props => {
  return (
    <div>
      {props.pinned && (
        <PinnedTweet>
          <PinnedIcon src={iconPinned} />
          <PinnedText>Pinned Tweet</PinnedText>
        </PinnedTweet>
      )}
      <Container>
        <Avatar src={process.env.PUBLIC_URL + "/img/TweetAvatar.png"} />
        <Body>
          <Header>
            <Poster>{props.name}</Poster>
            <Info>
              {props.nickname} • {props.date}
            </Info>
          </Header>
          {props.type === "common" && <Text>{props.text}</Text>}
          {props.type === "share" && (
            <div>
              <TextSmall>{props.text}</TextSmall>
              <Preview>
                <PreviewImage
                  src={process.env.PUBLIC_URL + "/img/Tweet3.png"}
                />
                <PreviewBody>
                  <PreviewHeader>{props.previewHeader}</PreviewHeader>
                  <PreviewText>{props.previewText}</PreviewText>
                  <PreviewSource>{props.previewSource}</PreviewSource>
                </PreviewBody>
              </Preview>
            </div>
          )}
          {props.attachment && (
            <Attachment
              src={process.env.PUBLIC_URL + "/img/" + props.attachment}
            />
          )}
          <Actions>
            <Comments>
              <Icon src={commentsIcon} alt="Comments" />
              {props.comments}
            </Comments>

            <Retweets retweeted>
              {props.retweeted && <Icon src={retweetsIcon} alt="Retweets" />}
              {props.retweeted || <Icon src={retweetsIcon} alt="Retweeted" />}
              {props.retweets}
            </Retweets>

            <Loves loved={props.loved}>
              {props.loved && <Icon src={lovedIcon} alt="Loved" />}
              {props.loved || <Icon src={lovesIcon} alt="Loves" />}
              {props.loves}
            </Loves>

            <Envelop>
              <Icon src={envelopeIcon} alt="Envelope" />
            </Envelop>
          </Actions>
        </Body>
      </Container>
    </div>
  );
};

export default Tweet;
