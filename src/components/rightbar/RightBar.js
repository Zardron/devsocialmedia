import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const HomeRightbar = () => {
        return (
            <>
                <span className="adTitle">Sponsored</span>
                <img className="rightbarAd" src={PF + "ad.png"} alt="" />
                <hr />
                <div className="birthday">
                    <span className="birthdayTitle">Birthdays</span>
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src={PF + "gift.png"} alt="" />
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
                        <span className="rightbarInfoValue">Former Web Developer at LEAR CORPORATION (PETC)-Philippine Engineering & Technology Center</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/M0Wls5DHC-A.png?_nc_eui2=AeEEen70RO4S2FaBm9M-2I2GJ2zClzTV8jMnbMKXNNXyMyHK5I1bJ3Ho3qokNSNc7IX8tOybfxADmEbKZlIbf2Wm" alt="" /></span>
                        <span className="rightbarInfoValue">Former Former Back-End Web Developer OJT at LEAR CORPORATION (PETC)-Philippine Engineering & Technology Center</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/id4jdGYPaIP.png?_nc_eui2=AeEKHAHgMbsjKKA6_RwYOSFoNWlf1E_21uw1aV_UT_bW7PjH68l-pZcO2Xkp2jBElWEdI6qTPYVDMH3MxNx4vjoz" alt="" /></span>
                        <span className="rightbarInfoValue">Went to University of Cebu UCLM</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/id4jdGYPaIP.png?_nc_eui2=AeEKHAHgMbsjKKA6_RwYOSFoNWlf1E_21uw1aV_UT_bW7PjH68l-pZcO2Xkp2jBElWEdI6qTPYVDMH3MxNx4vjoz" alt="" /></span>
                        <span className="rightbarInfoValue">Studied at University of Negros Occidental – Recoletos</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/X_t0JnueVu-.png?_nc_eui2=AeEMtV2zeYVqwmXhB2lS6weLL4WPyFecqSMvhY_IV5ypI_yQvHWrKPr2tTiF9AS6JPnl04K7hkBqYn358--MQM1I" alt="" /></span>
                        <span className="rightbarInfoValue">Lives in Lapu-Lapu City</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><img src=" https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/N_tq7yNW9DG.png?_nc_eui2=AeGz_QCWGnCG0eBsJGT6MY788XUv831Rf33xdS_zfVF_fRpzh9t5QsmU6iyreWHQA9-bj7D0o86M8V-h_clmJOO1" alt="" /></span>
                        <span className="rightbarInfoValue">From Talisay, Negros Occidental</span>
                    </div>


                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src={PF + "person/1.jpg"}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + "person/2.jpg"}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + "person/3.jpg"}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + "person/4.jpg"}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + "person/5.jpg"}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + "person/6.jpg"}
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