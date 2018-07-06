import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import iconPinned from './img/icon-pinned.svg';
import commentsIcon from './img/icon-comments.svg';
import retweetsIcon from './img/icon-retweet.svg';
import lovesIcon from './img/icon-loves.svg';
import lovedIcon from './img/icon-loved.png';
import envelopeIcon from './img/icon-envelope.svg';

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

const Body = styled.div`
  overflow: hidden;
  padding-right: 10px;
  a {
    text-decoration: none;
  }
`;

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
  margin: 0 0 17px 0;
  line-height: 30px;
  font-size: 25px;
  color: #292f33;
  p {
    margin: 0 0;
  }
  a {
    color: #1da1f2;
    text-decoration: none;
    word-wrap: break-word;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TextSmall = styled.p`
  margin: 0 0 17px 0;
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
  color: ${({ loved }) => (loved ? '#E2264D' : '#667580')};
`;
const Loves = Comments.extend`
  color: ${({ loved }) => (loved ? '#E2264D' : '#667580')};
`;
const Envelop = Comments;

const Preview = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  margin-right: 11px;
  cursor: pointer;
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

const Tweet = ({
  avatar,
  content,
  pinned,
  name,
  nickname,
  date,
  sharedFromAnotherSite,
  previewSource,
  previewImageSrc,
  previewHeader,
  previewText,
  media,
  comments,
  retweeted,
  retweets,
  loved,
  loves,
}) => {
  function createMarkup() {
    return { __html: content };
  }

  function LinkifiedText() {
    return <Text dangerouslySetInnerHTML={createMarkup()} />;
  }
  function LinkifiedTextSmall() {
    return <TextSmall dangerouslySetInnerHTML={createMarkup()} />;
  }

  const mediaList = media.map(attachment => (
    <Attachment key={attachment.id} src={attachment.preview_url} />
  ));

  return (
    <div>
      {pinned && (
        <PinnedTweet>
          <PinnedIcon src={iconPinned} />
          <PinnedText>
Pinned Tweet
          </PinnedText>
        </PinnedTweet>
      )}
      <Container>
        <Avatar src={avatar} />
        <Body>
          <Header>
            <Poster>
              {name}
            </Poster>
            <Info>
              {`@${nickname}`}
              {' '}
•
              {format(date, 'DD MMM')}
            </Info>
          </Header>
          {!sharedFromAnotherSite && LinkifiedText()}
          {sharedFromAnotherSite && (
            <div>
              {LinkifiedTextSmall()}
              <a href={`https://${previewSource}`}>
                <Preview>
                  <PreviewImage src={previewImageSrc} />
                  <PreviewBody>
                    <PreviewHeader>
                      {previewHeader}
                    </PreviewHeader>
                    <PreviewText>
                      {previewText}
                    </PreviewText>
                    <PreviewSource>
                      {previewSource}
                    </PreviewSource>
                  </PreviewBody>
                </Preview>
              </a>
            </div>
          )}
          {media.length !== 0 && mediaList}
          <Actions>
            <Comments>
              <Icon src={commentsIcon} alt="Comments" />
              {comments}
            </Comments>

            <Retweets retweeted>
              {retweeted && <Icon src={retweetsIcon} alt="Retweets" />}
              {retweeted || <Icon src={retweetsIcon} alt="Retweeted" />}
              {retweets}
            </Retweets>

            <Loves loved={loved}>
              {loved && <Icon src={lovedIcon} alt="Loved" />}
              {loved || <Icon src={lovesIcon} alt="Loves" />}
              {loves}
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
