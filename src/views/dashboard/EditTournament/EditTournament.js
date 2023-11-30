import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import ImageUploader from '../ImageUploader'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function EditTournament(props) {
  const handleClickOpen = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(true)
  }
  const handleNext = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(2)
  }
  const handleClose = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(0)
  }

  return (
    <div>
      <Dialog
        // eslint-disable-next-line react/prop-types
        open={props?.open === 1 ? true : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Sửa giải đấu '}</DialogTitle>
        <DialogContent style={{ width: 600 }}>
          <DialogContentText id="alert-dialog-slide-description">
            {/* eslint-disable-next-line react/prop-types */}
            <ImageUploader
              is_edit={true}
              // eslint-disable-next-line react/prop-types
              data={props?.data}
              // eslint-disable-next-line react/prop-types
              setData={props?.setData}
              // eslint-disable-next-line react/prop-types
              setImageChange={props?.setImageChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              handleNext()
            }}
          >
            Tiếp tục
          </Button>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
