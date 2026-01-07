/* eslint-disable jsx-a11y/label-has-associated-control */
import
    {
        CalendarToday,
        Email,
        LocationSearching,
        PermIdentity,
        PhoneAndroid,
        Publish,
        Work,
    } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import '../Stylesheet/StaffDetail.css';

export default function StaffDetail() {
  const { staffId } = useParams();

  // Sample staff data - in a real app, this would be fetched based on staffId
  const staffData = {
    id: staffId,
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'john.smith@company.com',
    phone: '+1 234 567 8901',
    location: 'New York | USA',
    role: 'Manager',
    department: 'Sales',
    status: 'active',
    joinDate: '2024-03-15',
    username: 'john.smith',
    salary: '$85,000',
  };

  return (
    <div className="staffDetail">
      <div className="staffDetailTitleContainer">
        <h1 className="staffDetailTitle">Edit Staff Member</h1>
      </div>
      <div className="staffDetailContainer">
        <div className="staffDetailShow">
          <div className="staffDetailShowTop">
            <img
              src={staffData.avatar}
              alt={staffData.name}
              className="staffDetailShowImg"
            />
            <div className="staffDetailShowTopTitle">
              <span className="staffDetailShowUsername">{staffData.name}</span>
              <span className="staffDetailShowUserTitle">{staffData.role}</span>
            </div>
          </div>
          <div className="staffDetailShowBottom">
            <span className="staffDetailShowTitle">Account Details</span>
            <div className="staffDetailShowInfo">
              <PermIdentity className="staffDetailShowIcon" />
              <span className="staffDetailShowInfoTitle">{staffData.username}</span>
            </div>
            <div className="staffDetailShowInfo">
              <CalendarToday className="staffDetailShowIcon" />
              <span className="staffDetailShowInfoTitle">Joined: {staffData.joinDate}</span>
            </div>
            <div className="staffDetailShowInfo">
              <Work className="staffDetailShowIcon" />
              <span className="staffDetailShowInfoTitle">{staffData.department}</span>
            </div>
            <span className="staffDetailShowTitle">Contact Details</span>
            <div className="staffDetailShowInfo">
              <Email className="staffDetailShowIcon" />
              <span className="staffDetailShowInfoTitle">{staffData.email}</span>
            </div>
            <div className="staffDetailShowInfo">
              <PhoneAndroid className="staffDetailShowIcon" />
              <span className="staffDetailShowInfoTitle">{staffData.phone}</span>
            </div>
            <div className="staffDetailShowInfo">
              <LocationSearching className="staffDetailShowIcon" />
              <span className="staffDetailShowInfoTitle">{staffData.location}</span>
            </div>
          </div>
        </div>
        <div className="staffDetailUpdate">
          <span className="staffDetailUpdateTitle">Edit Information</span>
          <form className="staffDetailUpdateForm">
            <div className="staffDetailUpdateLeft">
              <div className="staffDetailUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={staffData.name}
                  className="staffDetailUpdateInput"
                />
              </div>
              <div className="staffDetailUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder={staffData.email}
                  className="staffDetailUpdateInput"
                />
              </div>
              <div className="staffDetailUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={staffData.phone}
                  className="staffDetailUpdateInput"
                />
              </div>
              <div className="staffDetailUpdateItem">
                <label>Role</label>
                <input
                  type="text"
                  placeholder={staffData.role}
                  className="staffDetailUpdateInput"
                />
              </div>
              <div className="staffDetailUpdateItem">
                <label>Department</label>
                <select className="staffDetailUpdateInput">
                  <option value="Sales">Sales</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                  <option value="Support">Support</option>
                  <option value="Analytics">Analytics</option>
                </select>
              </div>
              <div className="staffDetailUpdateItem">
                <label>Status</label>
                <select className="staffDetailUpdateInput">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="staffDetailUpdateRight">
              <div className="staffDetailUpdateUpload">
                <img
                  src={staffData.avatar}
                  alt={staffData.name}
                  className="staffDetailUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="staffDetailUpdateIcon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>
              <button type="submit" className="staffDetailUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
