import React,{useState,useEffect}from 'react';
import {RiHome5Fill,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import {AiOutlineMenu} from 'react-icons/ai';
import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';
import { useContext } from 'react';
export default function PropertyDropdown() {
  const {property, setProperty, properties} = useContext(HouseContext)

  // console.log(properties)
  const[isOpen,setIsOpen] =useState(false)

  // console.log(property)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiHome5Fill className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>Selecy your property</div>
        </div>
          {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary'/>) : (<RiArrowDownSLine className='dropdown-icon-secondary'/>)}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property,i)=>{
          return(
            <Menu.Item as='li' key={i} className='cursor-pointer hover:text-violet-800 transition'
             onClick={()=>setProperty(property)}>{property}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

