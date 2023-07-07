import PropTypes from 'prop-types';

import {
  FriendsList,
  FriendsListItem,
  Avatar,
  FriendsListName,
  FriendsListIsOnline,
} from './FriendList.styled';

// import friendList from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem key={id}>
            <FriendsListIsOnline isOnline={isOnline}></FriendsListIsOnline>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <FriendsListName>{name}</FriendsListName>
          </FriendsListItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
