import picture from '../images/KakaoTalk_Photo_2021-10-14-18-17-59.jpeg'
const ProfilePic = () => {
  return (
    <span className="profile_pic">
      <img className="picture" src={picture} alt=""></img>
    </span>
  );
};

export default ProfilePic;