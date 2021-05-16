import React, { Component } from 'react'
import './home.css'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar'

class Homes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <TopBar />
                <div className="homeContainer">
                    <SideBar />
                    <Feed />
                    <RightBar />
                </div>
            </>
        )
    }
}

export default Homes
