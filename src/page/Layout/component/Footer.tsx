import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaYoutube } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { Link } from "react-router-dom"
import FooterImg from '../../../assets/logo.png'
const Footer = () => {
  const links1 = ['About', 'Careers', 'Contact', 'Blog'];
  const links2 = ['Support', 'FAQ', 'Help', 'Privacy'];
  return (
    <footer className='bg-black text-gray-400'>
      <div className='pt-14'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className='p-5'>
            <div className='flex gap-4 items-center'>
              <img src={FooterImg} alt="logo" />
            </div>
            <p className='text-gray-400 leading-7 mt-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex gap-3 items-center mt-5">
              <Link to={''} className='p-3 rounded-full bg-gray-500 hover:bg-[#000]  transition-all ease-in-out'>
                <FaFacebook size={15} color='#E50914' />
              </Link>
              <Link to={''} className='p-3 rounded-full bg-gray-500 hover:bg-[#000]  transition-all ease-in-out'>
                <FaYoutube size={15} color='#E50914' />
              </Link>
              <Link to={''} className='p-3 rounded-full bg-gray-500 hover:bg-[#000]  transition-all ease-in-out'>
                <FaInstagram size={15} color='#E50914' />
              </Link>
              <Link to={''} className='p-3 rounded-full bg-gray-500 hover:bg-[#000]  transition-all ease-in-out'>
                <FaLinkedinIn size={15} color='#E50914' />
              </Link>
            </div>
          </div>

          <div className='p-5'>
            <h2 className='text-2xl font-bold pb-5 text-white'>ABOUT</h2>
            <ul className='flex flex-col gap-3 text-sm'>
              {
                links1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className='p-5'>
            <h2 className='text-2xl font-bold pb-5 text-white'>INTERIOR</h2>
            <ul className='flex flex-col gap-3 text-sm'>
              {
                links2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className='p-5'>
            <h2 className='text-2xl font-bold pb-5 text-white'>CONTACT</h2>
            <ul className='flex flex-col gap-3'>
              <li className='flex gap-2 items-center'>
                <div className="w-5">
                  <FaPhone size={15} color='#E50914' />
                </div>

                <Link to={''} className='flex-1 text-sm'>
                  +201010708870
                </Link>
              </li>
              <li className='flex gap-2 items-center' >
                <div className="w-5">
                  <IoMdMail size={15} color='#E50914' />
                </div>

                <Link to={''} className='flex-1 text-sm'>
                  mahmoudgaber94@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright block border-t border-[#fcfcfc1a] mt-10 py-5'>
        <p className='text-center text-gray-400'>Copyright © 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer