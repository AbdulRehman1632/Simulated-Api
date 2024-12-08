import React from 'react'
import Button from 'react-bootstrap/Button';
import './CustomBtn.css'


const CustomBtn = (props) => {
    const {title}=props
  return (
    <div>
        <Button>{title}</Button>
      
    </div>
  )
}

export default CustomBtn
