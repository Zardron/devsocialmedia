import "./profile.css";
import Topbar from "../../components/topbar/TopBar";
// import Sidebar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <>
            <Topbar />
            <div className="container mt-4">
                <div className="profile">
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img
                                    className="profileCoverImg"
                                    src={PF + "cover.png"}
                                    alt=""
                                />
                                <img
                                    className="profileUserImg"
                                    src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-9/142669317_3952058088190889_731493683874102058_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEBJ2vfscHS7wYsGyFpns0dxHOVdDpccRbEc5V0OlxxFhdy8eKJHSoXs0JYg-NCxOlLlA4Pn5TaXjo769_iZgHV&_nc_ohc=4it4xL53lD4AX9dtj3U&_nc_ht=scontent.fceb1-1.fna&oh=0f404194652956cdee1ec307231aca66&oe=60C5AF5F"
                                    alt=""
                                />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Zardron Angelo Pesquera</h4>
                                <span className="profileInfoDesc">404 Not Found</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Rightbar profile />
                            <Feed />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}