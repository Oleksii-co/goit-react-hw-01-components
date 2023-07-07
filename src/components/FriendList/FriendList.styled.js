import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin-top: 50px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendsListItem = styled.li`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;

  border-radius: 10px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const FriendsListName = styled.p`
  margin-left: 10px;
`;

export const FriendsListIsOnline = styled.span`
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    }
    return 'red';
  }};
`;
