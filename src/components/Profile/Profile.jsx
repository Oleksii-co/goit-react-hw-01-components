import profile from './Profile.module.css'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={profile.profile}>
      <div className={profile.description}>
        <img src={avatar} alt="User avatar" className={profile.avatar} />
        <p className={profile.name}>{username}</p>
        <p className={profile.tag}>{tag}</p>
        <p className={profile.location}>{location}</p>
      </div>

      <ul className={profile.stats}>
        <li className={profile.item}>
          <span className={profile.label}>Followers</span>
          <span className={profile.quantity}>{followers}</span>
        </li>
        <li className={profile.item}>
          <span className={profile.label}>Views</span>
          <span className={profile.quantity}>{views}</span>
        </li>
        <li className={profile.item}>
          <span className={profile.label}>Likes</span>
          <span className={profile.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
