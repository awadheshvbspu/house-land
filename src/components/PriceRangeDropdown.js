import React,{useState,useEffect}from 'react';
import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import {AiOutlineMenu} from 'react-icons/ai';
import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';
import { useContext } from 'react';
export default function PriceRangeDropdown() {
  const {price, setPrice} = useContext(HouseContext)

  const[isOpen,setIsOpen] =useState(false)
  const prices = [
    {
      value:'Price range (any)',
    },
    {
      value:'10000-13000',
    },
    {
      value:'13000-16000',
    },
    {
      value:'16000-19000',
    },
    {
      value:'19000-22000',
    },
    {
      value:'30000-40000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {price}
          </div>
          <div className='text-[13px]'>Choose your price range</div>
        </div>
          {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary'/>) : (<RiArrowDownSLine className='dropdown-icon-secondary'/>)}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price,i)=>{
          return(
            <Menu.Item as='li' key={i} className='cursor-pointer hover:text-violet-800 transition'
             onClick={()=>setPrice(price.value)}>{price.value}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

