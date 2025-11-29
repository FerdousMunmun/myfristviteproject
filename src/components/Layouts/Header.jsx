import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Button from '../Button'
// import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="">
        <Container>
            <Flex className={"justify-between"}>
                <div className=''>
                    <Image src={logo}/>
                </div>
                 <div className=''>
                    <ul className='flex items-center'>
                      <li>Home</li>
                       <li>Home</li>
                        <li>Home</li>
                         <li>Home</li>
                          <li>Home</li>
                           <li>Home</li>
                       
                    </ul>

                 </div>
                  <div className=''>
                    <Button btnTxt={"Contact Us"}/>
                  </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header