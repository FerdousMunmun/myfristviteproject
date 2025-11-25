

import React from 'react'

const Button = ({btnTxt,className}) => {
  return (
    <Button className={`py-3.5 px-7 rounded-[100px] bg-[#FF7628] ${className}`}>{btnTxt}</Button>
  )
}

export default Button