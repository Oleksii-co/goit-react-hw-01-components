import { Profile } from "components/Profile/Profile.jsx";

import user from 'data/user.json';



// const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    
    <>
     <Profile
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     /> 
    </>
  );
};

