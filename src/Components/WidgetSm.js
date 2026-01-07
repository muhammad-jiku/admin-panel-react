import { Visibility } from '@mui/icons-material';
import { userRows } from '../DummyData';
import '../Stylesheets/WidgetSm.css';

function WidgetSm() {
  const newMembers = userRows.slice(0, 5);

  return (
    <div className="widgetSm">
      <h6 className="widgetSmTitle">New Members List</h6>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li className="widgetSmListItem" key={user.id}>
            <img
              src={user.avatar}
              alt={user.username}
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button type="button" className="widgetSmButton">
              <Visibility className="widgetSmIcon" /> Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
