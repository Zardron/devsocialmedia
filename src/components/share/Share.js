import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-9/142669317_3952058088190889_731493683874102058_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEBJ2vfscHS7wYsGyFpns0dxHOVdDpccRbEc5V0OlxxFhdy8eKJHSoXs0JYg-NCxOlLlA4Pn5TaXjo769_iZgHV&_nc_ohc=4it4xL53lD4AX9dtj3U&_nc_ht=scontent.fceb1-1.fna&oh=0f404194652956cdee1ec307231aca66&oe=60C5AF5F" alt="" />
                    <input
                        placeholder="What's on your mind, Zardron Angelo?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}