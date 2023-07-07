import PropTypes from 'prop-types';

// import profile from './Profile.module.css';

import {
  StyledProfile,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileItem,
  ProfileLabel,
  ProfileQuantity,
  ProfileStats,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledProfile>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{views}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </ProfileItem>
      </ProfileStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,

  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
