import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import getAllTournaments from 'src/api/get_all_tournament'
import EditTournament from './EditTournament/EditTournament'
import EditTournament2 from './EditTournament/EditTournament2'
import EditTournament3 from './EditTournament/EditTournament3'
import EditTournament4 from './EditTournament/EditTournament4'
import axios from 'axios'
import updateTournamentApi from 'src/api/update_tournament'
import swal from 'sweetalert'
import deleteTournamentApi from 'src/api/delete_tournament'

const ListTournament = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [dataUser, setDataUser] = useState()
  const [change, setChange] = useState(false)
  const [step, setStep] = useState()
  const [dataDetailTournament, setDataDetailTournament] = useState()
  const [imageChange, setImageChange] = useState(false)
  const [dataTournamentEdit, setDataTournamentEdit] = useState()
  const [imageTournamentEdit, setImageTournamentEdit] = useState()
  const [sponsorEdit, setSponsorEdit] = useState()
  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', imageTournamentEdit)
    formData.append('upload_preset', 'uem2kud5')

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/cockbook/image/upload',
        formData,
      )

      console.log('File uploaded successfully!', response.data)
      return response.data
    } catch (error) {
      console.error('Error uploading file: ', error)
    }
  }
  const updateTournament = async () => {
    try {
      if (imageChange === true) {
        const imageTournamentUrl = await handleUpload()
        const result = await updateTournamentApi(
          { image: imageTournamentUrl, sponsor: JSON.stringify(sponsorEdit), dataTournamentEdit },
          '',
        )
        if (result?.ok === true) {
          swal('Thông báo', 'Cập nhật giải đấu thành công', 'success').then(() => {
            setStep()
          })
        }
      } else {
        const result = await updateTournamentApi(
          { image: imageTournamentEdit, sponsor: JSON.stringify(sponsorEdit), dataTournamentEdit },
          '',
        )
        if (result?.ok === true) {
          swal('Thông báo', 'Cập nhật giải đấu thành công', 'success').then(() => {
            setStep()
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = () => {
    setChange(!change)
  }
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'title', headerName: 'Tên giải đấu', flex: 1 },
    { field: 'tournament_submission_point', headerName: 'Điểm giải đấu tối đa', flex: 1 },
    {
      field: 'maximum_individual_point',
      headerName: 'Điểm tối đa cá nhân',
      flex: 1,
    },
    {
      field: 'organization_units',
      headerName: 'Đơn vị tổ chức',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      flex: 1,
      // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'hold_time', headerName: 'Thời gian tổ chức', flex: 1 },
    { field: 'registration_dealine', headerName: 'Hạn chót đăng ký', flex: 1 },
    { field: 'expected_athletes', headerName: 'Vận động viên dự kiến', flex: 1 },
    {
      field: 'image_tournament',
      headerName: 'Ảnh giải đấu',
      flex: 1,
      renderCell: (param) => {
        return <img alt={''} src={param.row.image_tournament} style={{ aspectRatio: 4 / 2 }} />
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 3,
      renderCell: (param) => {
        return (
          <div style={{ width: 300, overflow: 'auto' }}>
            <Button
              onClick={() => {
                setStep(1)
                setDataDetailTournament(param.row)
              }}
              variant={'contained'}
              style={{ fontSize: 14, marginRight: 10 }}
            >
              Cập nhật
            </Button>
            <Button
              //   onClick={() => setOpen(true)}
              onClick={() => {
                swal('', 'Bạn có muốn xoá giải đấu này không, sau khi xoá sẽ không thể khôi phục', {
                  buttons: {
                    ok: 'Xoá',
                    cancel: 'Huỷ',
                  },
                }).then(async (value) => {
                  if (value === 'ok') {
                    // const result= await tou
                    const result = await deleteTournamentApi({ tournamentId: param.row.id })
                    swal('Thông báo', 'Đã xoá giải đấu thành công', 'success').then(() => {
                      handleChange()
                    })
                    console.log(result)
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
        const result = await getAllTournaments('')
        setData(result?.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [change])

  useEffect(() => {
    if (imageChange !== true) {
      setImageTournamentEdit(dataDetailTournament?.image_tournament)
    }
  }, [dataDetailTournament, imageChange])

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
        {/* <AboutUser open={open} setOpen={setOpen} {...dataUser} handleChange={handleChange} /> */}
        <EditTournament
          open={step}
          setOpen={setStep}
          data={imageTournamentEdit}
          setData={setImageTournamentEdit}
          imageChange={imageChange}
          setImageChange={setImageChange}
        />
        <EditTournament2
          open={step}
          setOpen={setStep}
          {...dataDetailTournament}
          data={dataTournamentEdit}
          setData={setDataTournamentEdit}
        />
        <EditTournament3
          open={step}
          setOpen={setStep}
          {...dataDetailTournament}
          data={sponsorEdit}
          setData={setSponsorEdit}
        />
        <EditTournament4
          open={step}
          setOpen={setStep}
          handleChange={handleChange}
          updateTournament={updateTournament}
        />
      </div>
    </div>
  )
}

export default ListTournament
