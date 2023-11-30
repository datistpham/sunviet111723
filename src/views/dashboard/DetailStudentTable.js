import * as React from 'react'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import getAllMod from 'src/api/get_all_mod'
import updateUser from 'src/api/update_user'
import swal from 'sweetalert'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

export default function DetailStudentTable(props) {
  const [id, setId] = useState()
  const [fullName, setFullName] = useState()
  const [gender, setGender] = useState()
  const [facebookLink, setFacebookLink] = useState()
  const [zaloLink, setZaloLink] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [address, setAddress] = useState()
  const [dob, setDob] = useState()
  const [bio, setBio] = useState()
  const [nickName, setNickName] = useState()
  const [gradingMod, setGradingMod] = useState()
  const [loading, setLoading] = useState(false)
  const [dataMod, setDataMod] = useState([])
  const handleChange = (event) => {
    setGradingMod(event.target.value)
  }
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setId(props?.id)
    // eslint-disable-next-line react/prop-types
    setFullName(props?.fullName)
    // eslint-disable-next-line react/prop-types
    setGender(props?.gender)
    // eslint-disable-next-line react/prop-types
    setFacebookLink(props?.facebookLink)
    // eslint-disable-next-line react/prop-types
    setZaloLink(props?.zaloLink)
    // eslint-disable-next-line react/prop-types
    setPhoneNumber(props?.phoneNumber)
    // eslint-disable-next-line react/prop-types
    setAddress(props?.address)
    // eslint-disable-next-line react/prop-types
    setDob(props?.dob)
    // eslint-disable-next-line react/prop-types
    setBio(props?.bio)
    // eslint-disable-next-line react/prop-types
    setNickName(props?.nickName)
    // eslint-disable-next-line react/prop-types
    setGradingMod(props?.gradingMod)
  }, [props])

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getAllMod()
        setDataMod(result?.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%', display: 'flex', gap: 10 }}>
        <div style={{ flex: 1, marginBottom: 12, marginTop: 12 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Tên đầy đủ: </div>
          <TextField
            fullWidth
            style={{ height: 40 }}
            placeholder="Tên của bạn"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value)
            }}
          />
        </div>
        <div style={{ flex: 1, marginBottom: 12, marginTop: 12 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Giới tính: </div>
          <TextField
            fullWidth
            style={{ height: 40 }}
            placeholder="Tên của bạn"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value)
            }}
          />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', gap: 10 }}>
        <div style={{ width: '100%', marginBottom: 12, marginTop: 12 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Trang cá nhân facebook: </div>
          <TextField
            fullWidth
            style={{ height: 40 }}
            placeholder="Trang cá nhân facebook của bạn"
            value={facebookLink}
            onChange={(e) => {
              setFacebookLink(e.target.value)
            }}
          />
        </div>
        <div style={{ width: '100%', marginBottom: 12, marginTop: 12 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Số zalo: </div>
          <TextField
            fullWidth
            style={{ height: 40 }}
            placeholder="Số zalo của bạn"
            value={zaloLink}
            onChange={(e) => {
              setZaloLink(e.target.value)
            }}
          />
        </div>
      </div>
      <div style={{ width: '100%', marginBottom: 12, marginTop: 12 }}>
        <div style={{ marginBottom: 12, marginTop: 20 }}>Số điện thoại: </div>
        <TextField
          fullWidth
          style={{ height: 40 }}
          placeholder="Số điện thoại của bạn"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          marginBottom: 12,
          marginTop: 12,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Tiểu sử: </div>
          <TextField
            fullWidth
            style={{ height: 40 }}
            placeholder="Tiểu sử của bạn"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
          />
        </div>
      </div>
      {/*  */}
      <div
        style={{
          width: '100%',
          marginBottom: 12,
          marginTop: 12,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Ngày sinh: </div>
          <LocalizationProvider dateAdapter={AdapterDayjs} style={{ width: '100%' }}>
            <DemoContainer style={{ width: '100%' }} components={['DatePicker', 'DatePicker']}>
              <DatePicker
                value={dayjs(dob)}
                onChange={(e) => {
                  setDob(e)
                }}
                label="Ngày sinh"
                format={'DD/MM/YYYY'}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12, marginTop: 20 }}>Địa chỉ: </div>
          <TextField
            fullWidth
            style={{ height: 40 }}
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>
      </div>
      {/*  */}
      <div style={{ width: '100%', marginBottom: 12, marginTop: 12 }}>
        <div style={{ marginBottom: 12, marginTop: 20 }}>Mod chấm trình: </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Mod chấm trình</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gradingMod}
            label="Mod chấm trình"
            onChange={handleChange}
          >
            {dataMod?.map((item, key) => (
              <MenuItem key={key} value={item?.modName}>
                {item?.modName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div style={{}}>
        <Button
          variant="contained"
          onClick={async () => {
            await updateUser(
              {
                phoneNumber,
                zaloLink,
                facebookLink,
                gender,
                fullName,
                bio,
                gradingMod,
                userId: id,
                address,
                dob,
              },
              '',
            )
            // eslint-disable-next-line react/prop-types
            props?.handleChange()
            // eslint-disable-next-line react/prop-types
            props?.setOpen(false)
            swal('', 'Cập nhật thông tin vận động viên thành công', 'success')
          }}
        >
          Cập nhật{' '}
        </Button>
      </div>
    </div>
  )
}
