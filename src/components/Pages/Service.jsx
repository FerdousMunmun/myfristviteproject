import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import servicelogo from '../../assets/servicelogo.png'

const Service = () => {
  return (
    <div className=''>
        <Container>
            <Flex>
                <div className=" py-3 items-center">
                     <div className="items-center">
                    <Image className={'items-center'} src={servicelogo}/>
                </div>
                <div className="">
                    <h2 className='font-extrabold font-openSans'>Our Services</h2>
                    <p className='font-[300px] font-paprika text-[#6C7D93]'>We have been providing great flooring solutions service.</p>
                    <h4></h4>

                </div>
                </div>
               

            </Flex>
        </Container>
    </div>
  )
}

export default Service