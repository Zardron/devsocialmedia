import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">FRIENDSTER</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-9/142669317_3952058088190889_731493683874102058_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEBJ2vfscHS7wYsGyFpns0dxHOVdDpccRbEc5V0OlxxFhdy8eKJHSoXs0JYg-NCxOlLlA4Pn5TaXjo769_iZgHV&_nc_ohc=4it4xL53lD4AX9dtj3U&_nc_ht=scontent.fceb1-1.fna&oh=0f404194652956cdee1ec307231aca66&oe=60C5AF5F" alt="" className="topbarImg" />
            </div>
        </div>
    );
}