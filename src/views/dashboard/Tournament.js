import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddTournament from './AddTournament'
import AddTournament2 from './AddTournament2'
import AddTournament3 from './AddTournament3'
import AddTournament4 from './AddTournament4'
import axios from 'axios'
import createTournamentApi from 'src/api/create_tournament'
import swal from 'sweetalert'
import ListTournament from './ListTournament'

const Tournament = () => {
  const [step, setStep] = useState(0)
  const [sponsor, setSponsor] = useState([])
  const [dataTournament, setDataTournament] = useState()
  const [imgTournament, setImgTournament] = useState()
  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', imgTournament)
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
  const createTournament = async () => {
    try {
      const imgTournamentUrl = await handleUpload()
      const result = await createTournamentApi(
        { imgTournamentUrl, sponsor: JSON.stringify(sponsor), dataTournament },
        '',
      )
      if (result?.ok === true) {
        swal('Thông báo', 'Tạo giải đấu thành công', 'success').then(() => {
          setStep()
        })
      }
    } catch (error) {
      console.loh(error)
      swal('Thông báo', 'Tạo giải đấu thất bại ' + error, 'error')
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setStep(1)
        }}
      >
        Tạo giải đấu
      </Button>
      <ListTournament />
      <AddTournament
        open={step}
        setOpen={setStep}
        setStep={setStep}
        step={step}
        data={imgTournament}
        setData={setImgTournament}
      />
      <AddTournament2
        open={step}
        setOpen={setStep}
        data={dataTournament}
        setData={setDataTournament}
      />
      <AddTournament3 open={step} setOpen={setStep} data={sponsor} setData={setSponsor} />
      <AddTournament4
        open={step}
        setOpen={setStep}
        data1={imgTournament}
        data2={sponsor}
        data3={dataTournament}
        createTournament={createTournament}
      />
    </div>
  )
}

export default Tournament
