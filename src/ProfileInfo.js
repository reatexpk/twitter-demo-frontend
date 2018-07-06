import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';

import tick from './img/icon-tick.png';
import iconLocation from './img/icon-location.svg';
import iconLink from './img/icon-link.svg';
import iconJoined from './img/icon-joined.svg';

const StyledProfileInfo = styled.section`
  position: relative;
  margin-top: 41px;
`;

const Avatar = styled.img`
  width: 210px;
  height: 210px;
  position: absolute;
  top: -180px;
  border-radius: 100%;
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
const Link = styled.a`
  line-height: 28px;
  font-size: 14px;
  color: #657786;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

class ProfileInfo extends React.Component {
  render() {
    const { userData } = this.props;
    function createMarkup() {
      return { __html: userData.note };
    }
    function BioHTML() {
      return <Bio dangerouslySetInnerHTML={createMarkup()} />;
    }
    return (
      <StyledProfileInfo>
        <Avatar src={userData.avatar_static} />
        <AvoidWrapper>
          <HeaderWrapper>
            <Header>
              {userData.display_name}
            </Header>
            <VerificationTick src={tick} />
          </HeaderWrapper>
          <div>
            <Username>
              @
              {userData.username}
            </Username>
            <FollowsYou>
Follows you
            </FollowsYou>
          </div>
          {BioHTML()}
          <Location>
            <Icon src={iconLocation} alt="Location" />
            <span>
London, UK
            </span>
          </Location>
          <Link href={userData.url}>
            <Icon src={iconLink} alt="Link" />
            <span>
              {userData.url}
            </span>
          </Link>
          <JoinDate>
            <Icon src={iconJoined} alt="Joined" />
            <span>
              Joined
              {` ${format(userData.created_at, 'YYYY MMM')}`}
            </span>
          </JoinDate>
          <Actions>
            <Button>
Tweet to
            </Button>
            <Button>
Message
            </Button>
          </Actions>
        </AvoidWrapper>
      </StyledProfileInfo>
    );
  }
}

export default withRouter(ProfileInfo);
