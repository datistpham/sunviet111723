import React from 'react'
import UploadFile from './component/UploadFile'

const NewProposalIndex = () => {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div>
              <span>Chọn loại đề xuất</span>
            </div>
            <div>
              <span>Nội dung trích yếu</span>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <UploadFile />
          </div>
        </div>
        <div style={{ width: 250, marginLeft: 20 }}></div>
      </div>
    </div>
  )
}

export default NewProposalIndex
