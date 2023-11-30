import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ElementAddTournament3 = (props) => {
  const [id, setId] = useState()
  const [value, setValue] = useState()
  const [value1, setValue1] = useState()

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setValue(props?.sponsorName)
    // eslint-disable-next-line react/prop-types
    setValue1(props?.description)
    // eslint-disable-next-line react/prop-types
    setId(props?.id)
  }, [props])
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
            // props?.setValue(e.target.value)

            setValue(e.target.value)
            // eslint-disable-next-line react/prop-types
            let updatedSponsors = props?.data?.map((sponsor) => {
              // Nếu id của phần tử hiện tại trùng với targetId, thay đổi giá trị của thuộc tính sponsorName
              if (sponsor.id == id) {
                return {
                  ...sponsor,
                  sponsorName: e.target.value,
                }
              }
              // Nếu không trùng, trả về phần tử ban đầu mà không thay đổi
              return sponsor
            })
            // eslint-disable-next-line react/prop-types
            props?.setData(updatedSponsors)
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
            // props?.setValue1(e.target.value)
            setValue(e.target.value)
            // eslint-disable-next-line react/prop-types
            let updatedSponsors = props?.data?.map((sponsor) => {
              // Nếu id của phần tử hiện tại trùng với targetId, thay đổi giá trị của thuộc tính sponsorName
              if (sponsor.id == id) {
                return {
                  ...sponsor,
                  description: e.target.value,
                }
              }
              // Nếu không trùng, trả về phần tử ban đầu mà không thay đổi
              return sponsor
            })
            // eslint-disable-next-line react/prop-types
            props?.setData(updatedSponsors)
          }}
          style={{ height: 40 }}
          fullWidth
          placeholder="Nội dung tài trợ"
        />
      </div>
      <Button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          // eslint-disable-next-line react/prop-types
          props?.setData(props?.data?.filter((item1) => item1?.id != props?.id))
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
