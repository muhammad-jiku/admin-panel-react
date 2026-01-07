import { Delete, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../Stylesheet/Staff.css';

export default function Staff() {
  const staffMembers = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      email: 'john.smith@company.com',
      role: 'Manager',
      department: 'Sales',
      status: 'active',
      joinDate: '2024-03-15',
    },
    {
      id: 2,
      name: 'Lisa Anderson',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      email: 'lisa.anderson@company.com',
      role: 'Team Lead',
      department: 'Support',
      status: 'active',
      joinDate: '2024-05-20',
    },
    {
      id: 3,
      name: 'Robert Brown',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      email: 'robert.brown@company.com',
      role: 'Developer',
      department: 'Engineering',
      status: 'active',
      joinDate: '2024-01-10',
    },
    {
      id: 4,
      name: 'Maria Garcia',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      email: 'maria.garcia@company.com',
      role: 'Designer',
      department: 'Design',
      status: 'active',
      joinDate: '2024-07-01',
    },
    {
      id: 5,
      name: 'Tom Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      email: 'tom.wilson@company.com',
      role: 'Analyst',
      department: 'Analytics',
      status: 'inactive',
      joinDate: '2023-11-15',
    },
    {
      id: 6,
      name: 'Emily Davis',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      email: 'emily.davis@company.com',
      role: 'Developer',
      department: 'Engineering',
      status: 'active',
      joinDate: '2024-02-20',
    },
    {
      id: 7,
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      email: 'michael.chen@company.com',
      role: 'Marketing',
      department: 'Marketing',
      status: 'active',
      joinDate: '2024-04-05',
    },
    {
      id: 8,
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
      email: 'sarah.johnson@company.com',
      role: 'HR Manager',
      department: 'HR',
      status: 'active',
      joinDate: '2023-12-01',
    },
  ];

  return (
    <div className="staff">
      <div className="staffHeader">
        <h1 className="staffTitle">Staff Management</h1>
        <Link to="/newStaff">
          <button className="staffAddButton">Add New Staff</button>
        </Link>
      </div>
      <div className="staffStats">
        <div className="staffStat">
          <h3>Total Staff</h3>
          <span className="staffStatValue">{staffMembers.length}</span>
        </div>
        <div className="staffStat">
          <h3>Active</h3>
          <span className="staffStatValue">{staffMembers.filter(s => s.status === 'active').length}</span>
        </div>
        <div className="staffStat">
          <h3>Departments</h3>
          <span className="staffStatValue">7</span>
        </div>
      </div>
      <div className="staffTableWrapper">
        <table className="staffTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Staff Member</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td className="staffUser">
                  <img src={staff.avatar} alt={staff.name} className="staffAvatar" />
                  {staff.name}
                </td>
                <td>{staff.email}</td>
                <td>{staff.role}</td>
                <td>{staff.department}</td>
                <td>{staff.joinDate}</td>
                <td>
                  <span className={`staffStatus ${staff.status}`}>
                    {staff.status}
                  </span>
                </td>
                <td className="staffActions">
                  <Link to={`/staff/${staff.id}`}>
                    <Edit className="staffEditIcon" />
                  </Link>
                  <Delete className="staffDeleteIcon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
