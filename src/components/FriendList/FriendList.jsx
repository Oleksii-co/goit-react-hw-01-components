import PropTypes from 'prop-types';

import friendList from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={friendList.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={friendList.item} key={id}>
            <span
              className={isOnline ? friendList.statusgreen : friendList.status}
            ></span>
            <img
              className={friendList.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={friendList.name}>{name}</p>
          </li>
        );
      })}
    </ul>
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
