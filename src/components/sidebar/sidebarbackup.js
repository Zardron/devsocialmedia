import "./sidebar.css";
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@material-ui/icons";
import { Users } from "../../DummyData";
import CloseFriend from "../closefriend/CloseFriend";

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon" /> */}
                        <img src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-9/142669317_3952058088190889_731493683874102058_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEBJ2vfscHS7wYsGyFpns0dxHOVdDpccRbEc5V0OlxxFhdy8eKJHSoXs0JYg-NCxOlLlA4Pn5TaXjo769_iZgHV&_nc_ohc=4it4xL53lD4AX9dtj3U&_nc_ht=scontent.fceb1-1.fna&oh=0f404194652956cdee1ec307231aca66&oe=60C5AF5F" className="sidebarIconss" alt="" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}