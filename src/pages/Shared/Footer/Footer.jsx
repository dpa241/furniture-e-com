import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div>
      <div className='border-y py-2'>
      <FooterTop/>
      </div>
      <FooterBottom/>
    </div>
  )
}

export default Footer