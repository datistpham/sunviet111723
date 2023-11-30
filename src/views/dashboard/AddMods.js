import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'
import createModApi from 'src/api/create_mod'

export default function AddMods(props) {
  const [modName, setModName] = React.useState()
  const handleClickOpen = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(true)
  }

  const handleClose = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(false)
  }
  const createMod = async () => {
    const result = await createModApi({ modName }, '')
    console.log(result)
  }

  return (
    <div>
      <Dialog
        // eslint-disable-next-line react/prop-types
        open={props?.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Thêm mod chấm trình'}</DialogTitle>
        <DialogContent style={{ width: 600 }}>
          <DialogContentText id="alert-dialog-description">
            <TextField
              placeholder="Nhập tên mod chấm trình"
              value={modName}
              onChange={(e) => setModName(e.target.value)}
              fullWidth
              style={{ height: 40, padding: 10, margin: ' 12px 0' }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button
            onClick={async () => {
              const res = await createMod()
              // eslint-disable-next-line react/prop-types
              props?.handleChange()
              handleClose()
            }}
            autoFocus
          >
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
