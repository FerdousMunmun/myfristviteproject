import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Heading from '../Heading'
import Service from '/src/Components/pages/Service'

const Footer = () => {
  return (
    <div className=''>
      <Container>
        <Flex className={'py-4'}>
          <div className="w-[40%]">
            <Image src={logo}/>
            <p className='text-[#6C7D93] pr-10'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            </div>
          <div className="w-[60%]">
              <ul className='flex items-center gap-x-36 font-openSans'>
            <li>Feature
              <p className='text-[#6C7D93]'>Home
About
Benifit
Pricing
Blog</p>
            </li>

             <li>Product
              <p  className='text-[#6C7D93]'>Task Management
Company growth
Time tracking</p>
             </li>
              <li>Service
                <p  className='text-[#6C7D93]'>                Customer service
Accessibility
Contact us</p>

              </li>
          </ul>
          </div>
        

        </Flex>
      </Container>
      <Service/>
    </div>

  )
}

export default Footer