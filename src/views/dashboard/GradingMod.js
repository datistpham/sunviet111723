import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import AboutMod from './AboutMod'
import getAllMod from 'src/api/get_all_mod'
import AddMods from './AddMods'
import swal from 'sweetalert'
import deleteModApi from 'src/api/delete_mods'

const GradingMod = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [change, setChange] = useState(false)
  const [dataUser, setDataUser] = useState()
  const handleChange = () => {
    setChange(!change)
  }
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'modName', headerName: 'Tên mod chấm trình', flex: 1 },
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
              onClick={() => {
                swal('', 'Bạn có muốn xoá mod chấm trình này không? ', {
                  buttons: {
                    ok: 'Xoá',
                    cancel: 'Huỷ',
                  },
                }).then(async (value) => {
                  if (value === 'ok') {
                    const result = await deleteModApi({ id: param.row.id })
                    handleChange()
                  } else {
                    return null
                  }
                })
              }}
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
        const result = await getAllMod('')
        setData(result.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [change])

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <Button
        onClick={() => {
          setOpen1(!open1)
        }}
        variant="contained"
      >
        Thêm mod chấm trình
      </Button>
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
        <AboutMod open={open} setOpen={setOpen} {...dataUser} handleChange={handleChange} />
        <AddMods open={open1} setOpen={setOpen1} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default GradingMod
