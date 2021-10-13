import { GTranslate, Notifications, Settings } from '@mui/icons-material';
import React from 'react';
import '../Stylesheets/Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <p className="logo">
            Admin Corner
            <sup style={{ fontFamily: 'cursive', fontSize: 8 }}>JIKU</sup>
          </p>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <GTranslate />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-1/p160x160/234803140_1134995610324894_6183898670054812361_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2WmXSdWbH7sAX8IeEHL&_nc_ht=scontent.fdac24-1.fna&oh=dbcbd218d4d82dd6b32573a4fcecc290&oe=6188D945"
            alt="#"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
