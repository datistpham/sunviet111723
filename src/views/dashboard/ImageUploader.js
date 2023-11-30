import React, { useState } from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'

const ImageUploader = (props) => {
  const [image, setImage] = useState(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
    }

    if (file) {
      // eslint-disable-next-line react/prop-types
      if (props?.is_edit === true) {
        // eslint-disable-next-line react/prop-types
        props?.setImageChange(true)
      }
      // eslint-disable-next-line react/prop-types
      props?.setData(file)
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    // TODO: Xử lý logic upload ảnh ở đây
    console.log('Upload image:', image)
  }

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography variant="h5" mb={2}>
          Upload Ảnh giải đấu
        </Typography>
        <label htmlFor="file-upload">
          <input
            style={{ display: 'none' }}
            id="file-upload"
            name="file-upload"
            type="file"
            onChange={handleImageChange}
          />
          <Button variant="contained" component="span">
            Chọn Ảnh
          </Button>
        </label>
        {image && (
          <div style={{ marginTop: 20 }}>
            <Typography variant="subtitle1">Xem trước:</Typography>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={image} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ImageUploader
