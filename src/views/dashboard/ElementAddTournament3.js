import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ElementAddTournament3 = (props) => {
  const [value, setValue] = useState()
  const [value1, setValue1] = useState()
  return (
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
        <div style={{ margin: '8px 0' }}>Tên nhà tài trợ</div>
        <TextField
          value={value}
          onChange={(e) => {
            // eslint-disable-next-line react/prop-types
            props?.setValue(e.target.value)
            setValue(e.target.value)
          }}
          style={{ height: 40 }}
          fullWidth
          placeholder="Tên nhà tài trợ"
        />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ margin: '8px 0' }}>Nội dung tài trợ</div>
        <TextField
          value={value1}
          onChange={(e) => {
            setValue1(e.target.value)
            // eslint-disable-next-line react/prop-types
            props?.setValue1(e.target.value)
          }}
          style={{ height: 40 }}
          fullWidth
          placeholder="Nội dung tài trợ"
        />
      </div>
      <Button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          props?.setCount(props?.count?.filter((item1) => item1 != props?.item))
          // eslint-disable-next-line react/prop-types
          props?.setData(props?.data?.filter((item1) => item1?.key != props?.item))
        }}
        style={{ margin: '8px 0' }}
        variant="contained"
        color={'error'}
      >
        Xoá
      </Button>
    </div>
  )
}

export default ElementAddTournament3
