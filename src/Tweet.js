import React from "react";
import styled from "styled-components";
import Tweet1_Image from "./img/Tweet1.png";
import Tweet3_Image from "./img/Tweet3.png";

const Avatar = styled.img`
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 5px 10px 0 11px;
`;

const TweetConatiner = styled.div`
  display: flex;
`;

const TweetBody = styled.div``;

const TweetHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Poster = styled.h6`
  margin: 0;
  line-height: 30px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #292f33;
`;

const TweetInfo = styled.p`
  margin: 0 0 0 5px;
  padding: 0;
  line-height: 21px;
  font-size: 14px;
  letter-spacing: -0.219231px;
  color: #697787;
`;

const TweetText = styled.div`
  margin-bottom: 17px;
  line-height: 30px;
  font-size: 25px;
  letter-spacing: 0.38px;
  color: #292f33;
`;

const TweetTextSmall = styled.div`
  margin-bottom: 17px;
  line-height: 22px;
  font-size: 16px;
  letter-spacing: -0.219231px;
  color: #292f33;
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

class Tweet extends React.Component {
  render() {
    if (this.props.id === "1") {
      return (
        <TweetConatiner>
          <Avatar src={process.env.PUBLIC_URL + "/img/TweetAvatar.png"} />
          <TweetBody>
            <TweetHeader>
              <Poster>Every Interaction</Poster>
              <TweetInfo>@EveryInteract • {this.props.date}</TweetInfo>
            </TweetHeader>
            <TweetText>
              We’ve made some more resources for all you wonderful{" "}
              <a href="#">#design</a> folk
              <a href="#"> everyinteraction.com/resources/</a>
              <a href="#"> #webdesign</a> <a href="#">#UI</a>
            </TweetText>
            <Tweet1 src={Tweet1_Image} />
          </TweetBody>
        </TweetConatiner>
      );
    } else if (this.props.id === "2") {
      return (
        <TweetConatiner>
          <Avatar src={process.env.PUBLIC_URL + "/img/TweetAvatar.png"} />
          <TweetBody>
            <TweetHeader>
              <Poster>Every Interaction</Poster>
              <TweetInfo>@EveryInteract • {this.props.date}</TweetInfo>
            </TweetHeader>
            <TweetText>
              Our new website concept; Taking you from… @ Every Interaction{" "}
              <a href="#">instagram.com/p/BNFGrfhBP3M/</a>
            </TweetText>
          </TweetBody>
        </TweetConatiner>
      );
    } else {
      return (
        <TweetConatiner>
          <Avatar src={process.env.PUBLIC_URL + "/img/TweetAvatar.png"} />
          <TweetBody>
            <TweetHeader>
              <Poster>Every Interaction</Poster>
              <TweetInfo>@EveryInteract • {this.props.date}</TweetInfo>
            </TweetHeader>
            <TweetTextSmall>
              Variable web fonts are coming, and will open a world of
              opportunities for weight use online
            </TweetTextSmall>
            <PreviewWrapper>
              <Tweet3 src={Tweet3_Image} />
              <PreviewBlock>
                <PreviewBlockHeader>The Future of Web Fonts</PreviewBlockHeader>
                <PreviewBlockParag>
                  We love typefaces. They give our sites and applications
                  personalized feel. They convey the information and tell a
                  story. They establish information hierarchy. But they’re…
                </PreviewBlockParag>
                <PreviewBlockSource>vilijamis.com</PreviewBlockSource>
              </PreviewBlock>
            </PreviewWrapper>
          </TweetBody>
        </TweetConatiner>
      );
    }
  }
}

export default Tweet;
