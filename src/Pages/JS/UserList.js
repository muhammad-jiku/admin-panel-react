import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userRows } from '../../DummyData';
import '../Stylesheet/UserList.css';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src={params.row.avatar}
              alt={params.row.username}
              className="userListImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 280,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 110,
      // eslint-disable-next-line react/display-name
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '100%' }}>
            <Link to={'/user/' + params.row.id} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Edit className="userListEdit" />
            </Link>
            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
