import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import getAllUser from 'src/api/get_all_user'
import AboutUser from './AboutUser'
import moment from 'moment'

const User = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [dataUser, setDataUser] = useState()
  const [change, setChange] = useState(false)
  const handleChange = () => {
    setChange(!change)
  }
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'fullName', headerName: 'Tên đầy đủ', flex: 1 },
    {
      field: 'gender',
      headerName: 'Giới tính',
      flex: 1,
      renderCell: (param) => {
        if (param.row.gender == 0) {
          return <div>Name</div>
        } else {
          return <div>Nữ </div>
        }
      },
    },
    {
      field: 'phoneNumber',
      headerName: 'Số điện thoại',
      flex: 1,
    },
    {
      field: 'facebookLink',
      headerName: 'Trang cá nhân facebook',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      flex: 1,
      // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'zaloLink', headerName: 'Số Zalo', flex: 1 },
    { field: 'phoneNumber', headerName: 'Số điện thoại liên hệ', flex: 1 },
    { field: 'gradingMod', headerName: 'Mod chấm trình', flex: 1 },
    { field: 'address', headerName: 'Địa chỉ', flex: 1 },
    { field: 'dob', headerName: 'Năm sinh', flex: 1 },
    { field: 'dateJoin', headerName: 'Ngày tham gia', flex: 1 },
    {
      field: 'lastUpdated',
      headerName: 'Cập nhật lần cuối',
      flex: 1,
      renderCell: (param) => {
        return moment(param.row.lastUpdated).format('DD/MM/YYYY HH:mm:ss')
      },
    },
    { field: 'bio', headerName: 'Tiểu sử', flex: 1 },
    { field: 'nickName', headerName: 'Biệt danh', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 3,
      renderCell: (param) => {
        return (
          <div style={{ width: 300, overflow: 'auto' }}>
            <Button
              onClick={() => {
                setOpen(true)
                setDataUser(param.row)
              }}
              variant={'contained'}
              style={{ fontSize: 14, marginRight: 10 }}
            >
              Cập nhật
            </Button>
            <Button
              onClick={() => setOpen(true)}
              variant={'contained'}
              color={'error'}
              style={{ fontSize: 14 }}
            >
              Xoá
            </Button>
          </div>
        )
      },
    },
  ]
  useEffect(() => {
    ;(async () => {
      try {
        const result = await getAllUser('')
        console.log(result)
        setData(result?.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [change])
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
        <AboutUser open={open} setOpen={setOpen} {...dataUser} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default User
