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
import dayjs from 'dayjs'
import { useState } from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function EditTournament2(props) {
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [tournamentSubmissionPoint, setTournamentSubmissionPoint] = useState()
  const [maximumIndividualPoint, setMaximumIndividualPoint] = useState()
  const [organizationUnit, setOrganizationUnit] = useState()
  const [holdTime, setHoldTime] = useState()
  const [registrationDeadline, setRegistrationDeadline] = useState()
  const [expectedAtheletes, setExpectedAtheletes] = useState()
  const handleClickOpen = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(1)
  }

  const handleClose = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(0)
  }

  React.useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setId(props?.id)
    // eslint-disable-next-line react/prop-types
    setTitle(props?.title)
    // eslint-disable-next-line react/prop-types
    setTournamentSubmissionPoint(props?.tournament_submission_point)
    // eslint-disable-next-line react/prop-types
    setMaximumIndividualPoint(props?.maximum_individual_point)
    // eslint-disable-next-line react/prop-types
    setOrganizationUnit(props?.organizational_units)
    // eslint-disable-next-line react/prop-types
    setHoldTime(props?.hold_time)
    // eslint-disable-next-line react/prop-types
    setRegistrationDeadline(props?.registration_deadline)
    // eslint-disable-next-line react/prop-types
    setExpectedAtheletes(props?.expected_athletes)
  }, [props])

  return (
    <div>
      <Dialog
        // eslint-disable-next-line react/prop-types
        open={props?.open === 2 ? true : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Sửa giải đấu '}</DialogTitle>
        <DialogContent style={{ width: 600 }}>
          <DialogContentText id="alert-dialog-slide-description">
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '12px 0',
              }}
            >
              <div style={{ width: '100%' }}>
                <div style={{ margin: '8px 0' }}>Tên giải đấu</div>
                <TextField
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                  style={{ height: 40 }}
                  fullWidth
                  placeholder="Nhập tên giải đấu "
                />
              </div>
            </div>
            {/* ? */}
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
              <div style={{ flex: 1 }}>
                <div style={{ margin: '8px 0' }}>Số điểm tối đa</div>
                <TextField
                  value={tournamentSubmissionPoint}
                  onChange={(e) => {
                    setTournamentSubmissionPoint(e.target.value)
                  }}
                  style={{ height: 40 }}
                  fullWidth
                  placeholder="Nhập số điểm tối đa "
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ margin: '8px 0' }}>Điểm đơn tối đa</div>
                <TextField
                  value={maximumIndividualPoint}
                  onChange={(e) => {
                    setMaximumIndividualPoint(e.target.value)
                  }}
                  style={{ height: 40 }}
                  fullWidth
                  placeholder="Nhập điểm đơn tối đa "
                />
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '12px 0',
              }}
            >
              <div style={{ width: '100%' }}>
                <div style={{ margin: '8px 0' }}>Đơn vị tổ chức</div>
                <TextField
                  value={organizationUnit}
                  onChange={(e) => {
                    setOrganizationUnit(e.target.value)
                  }}
                  style={{ height: 40 }}
                  fullWidth
                  placeholder="Nhập tên đơn vị tổ chức"
                />
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '12px 0',
              }}
            >
              <div style={{ width: '100%' }}>
                <div style={{ margin: '8px 0' }}>Vận động viên dự kiến</div>
                <TextField
                  value={expectedAtheletes}
                  onChange={(e) => {
                    setExpectedAtheletes(e.target.value)
                  }}
                  style={{ height: 40 }}
                  fullWidth
                  placeholder="Nhập tên số vận động viên dự kiến"
                />
              </div>
            </div>
            {/*  */}
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
              <div style={{ flex: 1 }}>
                <div style={{ margin: '8px 0' }}>Hạn chót đăng ký</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                      value={dayjs(registrationDeadline)}
                      onChange={(e) => {
                        setRegistrationDeadline(e)
                      }}
                      disablePast
                      label="Hạn chót đăng ký"
                      format={'DD/MM/YYYY'}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ margin: '8px 0' }}>Thời gian tổ chức</div>
                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ width: '100%' }}>
                  <DemoContainer
                    style={{ width: '100%' }}
                    components={['DatePicker', 'DatePicker']}
                  >
                    <DatePicker
                      value={dayjs(holdTime)}
                      onChange={(e) => setHoldTime(e)}
                      disablePast
                      label="Thời gian tổ chức"
                      format={'DD/MM/YYYY'}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            {/*  */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props?.setOpen(3)
              // eslint-disable-next-line react/prop-types
              props?.setData({
                title,
                tournamentSubmissionPoint,
                maximumIndividualPoint,
                organizationUnit,
                expectedAtheletes,
                registrationDeadline,
                holdTime,
                id,
              })
            }}
          >
            Tiếp tục
          </Button>
          <Button
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props?.setOpen(1)
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
