import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ElementAddTournament3 from './ElementAddTournament3'

function generateRandomNumber() {
  const min = 1000000
  const max = 9999999
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AddTournament3(props) {
  //   const [data, setData]= React.useState([])
  const [count, setCount] = useState([12345])
  const [data, setData] = useState([])
  const [value, setValue] = useState()
  const [value1, setValue1] = useState()
  const handleClose = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(0)
  }

  return (
    <div>
      <Dialog
        // eslint-disable-next-line react/prop-types
        open={props?.open === 3 ? true : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Thêm giải đấu '}</DialogTitle>
        <DialogContent style={{ width: 600, maxHeight: 300, overflow: 'auto' }}>
          <DialogContentText id="alert-dialog-slide-description">
            {count?.map((item, key) => (
              <ElementAddTournament3
                key={key}
                item={item}
                count={count}
                setCount={setCount}
                setData={setData}
                data={data}
                setValue={setValue}
                setValue1={setValue1}
              />
            ))}

            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '12px 0',
                gap: 10,
              }}
            >
              <Button
                onClick={() => {
                  const rd = generateRandomNumber()
                  setCount((prev) => [...prev, rd])
                  setData((prev) => [...prev, { sponsorName: value, description: value1, key: rd }])
                  setValue()
                  setValue1()
                }}
                style={{ margin: '8px 0', width: '100%' }}
                variant="contained"
              >
                Thêm
              </Button>
            </div>
            {/*  */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props?.setOpen(4)
              // eslint-disable-next-line react/prop-types
              props?.setData(data?.filter((item) => item.sponsorName != undefined))
            }}
          >
            Tiếp tục
          </Button>
          <Button
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props?.setOpen(2)
            }}
          >
            Quay lại
          </Button>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
