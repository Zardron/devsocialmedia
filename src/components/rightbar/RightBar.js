import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <span className="adTitle">Sponsored</span>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <hr />
                <div className="birthday">
                    <span className="birthdayTitle">Birthdays</span>
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/gift.png" alt="" />
                        <span className="birthdayText">
                            <b>Emily Willis</b> and <b>4 other friends</b> have a birhday today.
                    </span>
                    </div>
                </div>
                <hr />
                <div className="onlineFriends">
                    <h4 className="onlineFriendsTitle">Online Friends <span className="onlineCount">(12)</span></h4>
                    <ul className="rightbarFriendList">
                        {Users.map((u) => (
                            <Online key={u.id} user={u} />
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">Intro</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/M0Wls5DHC-A.png?_nc_eui2=AeEEen70RO4S2FaBm9M-2I2GJ2zClzTV8jMnbMKXNNXyMyHK5I1bJ3Ho3qokNSNc7IX8tOybfxADmEbKZlIbf2Wm" alt="" /></span>
                        <span className="rightbarInfoValue">Web Application Developer at Ninety Six Back Operation Services</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/M0Wls5DHC-A.png?_nc_eui2=AeEEen70RO4S2FaBm9M-2I2GJ2zClzTV8jMnbMKXNNXyMyHK5I1bJ3Ho3qokNSNc7IX8tOybfxADmEbKZlIbf2Wm" alt="" /></span>
                        <span className="rightbarInfoValue">Web Application Developer at Ninety Six Back Operation Services</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/M0Wls5DHC-A.png?_nc_eui2=AeEEen70RO4S2FaBm9M-2I2GJ2zClzTV8jMnbMKXNNXyMyHK5I1bJ3Ho3qokNSNc7IX8tOybfxADmEbKZlIbf2Wm" alt="" /></span>
                        <span className="rightbarInfoValue">Web Application Developer at Ninety Six Back Operation Services</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}