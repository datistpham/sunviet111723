import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/users')
  }, [])
  return <></>
}

export default Dashboard
