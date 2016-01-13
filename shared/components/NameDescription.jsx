import React from 'react'
import { Link } from 'react-router'

export const NameDescription = () => {
  return (
    <div className="title-description">
      <div>full stack software engineer</div>
      <div>san francisco, ca</div>
      <Link to={'about'}>about</Link>
    </div>
  )
}
