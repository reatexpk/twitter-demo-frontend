import React from "react";
import styled from "styled-components";
import Tick from "./img/Tick.png";
import IconLocation from "./img/Icon_Location.svg";
import IconLink from "./img/Icon_Link.svg";
import IconJoined from "./img/Icon_Joined.svg";

const StyledProfileInfo = styled.section`
  position: relative;
  margin-top: 41px;
`;

const Avatar = styled.img`
  position: absolute;
  top: -180px;
`;

const AvoidWrapper = styled.div`
  padding-top: 41px;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

const Header = styled.h1`
  margin: 0 5px 0 3px;
  color: #14171a;
  line-height: 22px;
  font-size: 22px;
`;

const VerificationTick = styled.img`
  width: 18px;
  height: 18px;
`;

const Username = styled.p`
  display: inline;
  margin: 6px 0 0 3px;
  line-height: 21px;
  font-size: 14px;
  color: #697787;
`;

const FollowsYou = styled.p`
  margin-left: 8px;
  display: inline;
  line-height: 12px;
  font-size: 12px;
  color: #697787;
`;

const Bio = styled.p`
  margin: 12px 0 13px 4px;
  padding-right: 19px;
  line-height: 20px;
  font-size: 14px;
  color: #14171a;
`;

const Location = styled.div`
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;
const URL = styled.div`
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;
const JoinDate = styled.div`
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 13px;
  vertical-align: middle;
`;

const ProfileInfoIcon = props => {
  if (props.use === "location")
    return <Icon src={IconLocation} alt="Location" />;
  else if (props.use === "url") return <Icon src={IconLink} alt="URL" />;
  else return <Icon src={IconJoined} alt="URL" />;
};

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 7px;
`;

const Button = styled.button`
  padding: 11px 37px 13px 37px;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const ProfileInfo = () => {
  return (
    <StyledProfileInfo>
      <Avatar src={process.env.PUBLIC_URL + "/img/ProfileAvatar.png"} />
      <AvoidWrapper>
        <HeaderWrapper>
          <Header>Every Interaction</Header>
          <VerificationTick src={Tick} />
        </HeaderWrapper>
        <div>
          <Username>@EveryInteract</Username>
          <FollowsYou>Follows you</FollowsYou>
        </div>
        <Bio>
          UX Design studio focussed problem solving creativity. Design to us is
          how can we make things *work* amazing.
        </Bio>
        <Location>
          <ProfileInfoIcon use="location" />
          <span>London, UK</span>
        </Location>
        <URL>
          <ProfileInfoIcon use="url" />
          <span>everyinteraction.com</span>
        </URL>
        <JoinDate>
          <ProfileInfoIcon use="date" />
          <span>Joined May 2008</span>
        </JoinDate>
        <Actions>
          <Button>Tweet to</Button>
          <Button>Message</Button>
        </Actions>
      </AvoidWrapper>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
