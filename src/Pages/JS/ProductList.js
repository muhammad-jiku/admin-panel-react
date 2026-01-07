import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productRows } from '../../DummyData';
import '../Stylesheet/ProductList.css';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product',
      headerName: 'Product',
      width: 320,
      // eslint-disable-next-line react/display-name
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              src={params.row.avatar}
              alt={params.row.name}
              className="productListImg"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 140,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      // eslint-disable-next-line react/display-name
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '100%' }}>
            <Link to={'/product/' + params.row.id} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Edit className="productListEdit" />
            </Link>
            <Delete
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
