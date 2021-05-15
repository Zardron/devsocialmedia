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
    ArrowDropDownCircle,
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
                        <span className="sidebarListItemText">Zardron Angelo Pesquera</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeFUf1ll0QjQ9Qw16ao4CZciFjhaWUpP68wWOFpZSk_rzM2RJeGNTGTY7g2Km_ckwhPCfQrhaw85fJG-S2-H16aW" alt="" />
                        <span className="sidebarListItemText">COVID-19 Information Center</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeF9Br318Jv1CTjUuM413rWnqfpKmA4GtxSp-kqYDga3FEHK4feIGlmsF2AKxVPSBUfJ-05vJlY6GG9-LeqNPHHi" alt="" />
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png?_nc_eui2=AeGBo_chVHUewKP0MP_NSzRVu50TebM96Ti7nRN5sz3pOOy1yUoCnBQOUsAw0zVVJ-kLOv0Fa_EVD2a8-dNv5tFz" alt="" />
                        <span className="sidebarListItemText">Friends Lists</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png?_nc_eui2=AeHRrTPSj6Z2HO00-xOCX6B9hcFGLuoBbQiFwUYu6gFtCE6gUbUPPpnmlJL6UoJTBuMtCPQasa6paFNbu86-FUzw" alt="" />
                        <span className="sidebarListItemText">Messenger</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeFJLK4SP5-ANWP5j8wq_T6C2NRDTXGHJ53Y1ENNcYcnnZbslBp6zY5izf4usuYoxdkhLKPRsf_gni73uU2G9D8R" alt="" />
                        <span className="sidebarListItemText">Watch</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png?_nc_eui2=AeGus6KurPQyqr-6TPwQ9BwmeGQYcQV2gv94ZBhxBXaC_4wBvobKNgDFp3ucBgiPAaBYi8PiJ-UlGIincCKxqmFg" alt="" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png?_nc_eui2=AeEH7GqLaP2pEXK6vOiDwxcGU4NMTXfNRG1Tg0xNd81EbfGa8gX9V5hpXwCUWTMep8uagx_OwI49TizUr5VwCIKf" alt="" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeGCDCy6JE0Ey5euX55-CXN3-vsl1K9A-9v6-yXUr0D721SLIAbUKUd1NLDPf9g7kUmhJfZqIJbYjJxgGqOCWF5Z" alt="" />
                        <span className="sidebarListItemText">Marketplace</span>
                    </li>
                </ul>
                <div className="showmore">
                    <ArrowDropDownCircle className="showmoreIcon" />
                    <span className="showmoreText">See More</span>
                </div>
                <hr className="sidebarHr" />
                <span className="friendsListTitle">Friends Lists</span>
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}