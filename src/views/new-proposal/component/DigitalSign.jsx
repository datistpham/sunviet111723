import React from 'react'

const DigitalSign = () => {
  return (
    <div className="digital-sign">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <span>Ký điện tử</span>
          <span>(Ghi rõ họ tên)</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <span>Ý kiến kèm theo</span>
          <span>(Comment)</span>
        </div>
      </div>
    </div>
  )
}

export default DigitalSign
