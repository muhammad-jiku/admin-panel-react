import
  {
    AttachMoney,
    BarChart,
    Forum,
    GraphicEq,
    LineStyle,
    MailOutline,
    Person,
    Report,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOutline,
  } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import '../Stylesheets/Sidebar.css';

function Sidebar({ isOpen }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className={`sidebarListItem ${location.pathname === '/' ? 'active' : ''}`}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className={`sidebarListItem ${location.pathname === '/analytics' ? 'active' : ''}`}>
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link">
              <li className={`sidebarListItem ${location.pathname === '/sales' ? 'active' : ''}`}>
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className={`sidebarListItem ${location.pathname === '/users' ? 'active' : ''}`}>
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className={`sidebarListItem ${location.pathname === '/products' ? 'active' : ''}`}>
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className={`sidebarListItem ${location.pathname === '/transactions' ? 'active' : ''}`}>
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className={`sidebarListItem ${location.pathname === '/reports' ? 'active' : ''}`}>
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/mail" className="link">
              <li className={`sidebarListItem ${location.pathname === '/mail' ? 'active' : ''}`}>
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className={`sidebarListItem ${location.pathname === '/feedback' ? 'active' : ''}`}>
                <GraphicEq className="sidebarIcon" />
                Feedback
              </li>
            </Link>
            <Link to="/messages" className="link">
              <li className={`sidebarListItem ${location.pathname === '/messages' ? 'active' : ''}`}>
                <Forum className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/staff" className="link">
              <li className={`sidebarListItem ${location.pathname === '/staff' ? 'active' : ''}`}>
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link to="/staff-analytics" className="link">
              <li className={`sidebarListItem ${location.pathname === '/staff-analytics' ? 'active' : ''}`}>
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/staff-reports" className="link">
              <li className={`sidebarListItem ${location.pathname === '/staff-reports' ? 'active' : ''}`}>
                <Report className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
