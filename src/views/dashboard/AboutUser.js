import * as React from 'react'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import DetailStudentTable from './DetailStudentTable'
import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //   width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  overflow: 'auto',
  height: 'auto',
  //   border: '1px solid #000',
  //   boxShadow: 24,
  p: 4,
  width: 960,
}

export default function AboutUser(props) {
  // eslint-disable-next-line
  const handleClose = () => props?.setOpen(false)

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
          <DetailStudentTable {...props} />
        </Box>
      </Modal>
    </div>
  )
}
