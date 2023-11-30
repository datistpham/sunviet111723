import * as React from 'react'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import updateModApi from 'src/api/update_mod'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //   width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  //   border: '1px solid #000',
  //   boxShadow: 24,
  p: 4,
  width: 960,
}

export default function AboutMod(props) {
  // eslint-disable-next-line
  const handleClose = () => props?.setOpen(false)
  const [modName, setModName] = useState()

  React.useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setModName(props?.modName)
  }, [props])

  return (
    <div>
      <Modal
        // eslint-disable-next-line
        open={props?.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, marginBottom: 12, marginTop: 12 }}>
                <div style={{ marginBottom: 12, marginTop: 20 }}>Tên mod chấm trình: </div>
                <TextField
                  fullWidth
                  style={{ height: 40 }}
                  placeholder="Tên mod chấm trình"
                  value={modName}
                  onChange={(e) => {
                    setModName(e.target.value)
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                onClick={async () => {
                  // eslint-disable-next-line react/prop-types
                  props?.handleChange()
                  // eslint-disable-next-line react/prop-types
                  props?.setOpen(false)
                  // eslint-disable-next-line react/prop-types
                  await updateModApi({ modName, id: props?.id }, '')
                }}
              >
                Cập nhật{' '}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
