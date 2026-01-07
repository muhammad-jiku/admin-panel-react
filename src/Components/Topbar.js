import { GTranslate, Menu, Notifications, Settings } from '@mui/icons-material';
import { useState } from 'react';
import '../Stylesheets/Topbar.css';

function Topbar({ toggleSidebar }) {
  const [notifications] = useState(3);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Menu className="menuIcon" onClick={toggleSidebar} />
          <p className="logo">
            Admin Panel
          </p>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            {notifications > 0 && <span className="topIconBadge">{notifications}</span>}
          </div>
          <div className="topbarIconContainer">
            <GTranslate />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/50.jpg"
            alt="Admin Avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
