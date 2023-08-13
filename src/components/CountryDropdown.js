import React,{useState,useEffect}from 'react';
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';
import { useContext } from 'react';
export default function CountryDropdown() {
  const {country, setCountry, countries} = useContext(HouseContext)

  // console.log(countries)
  const[isOpen,setIsOpen] =useState(false)

  // console.log(country)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiMapPinLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {country}
          </div>
          <div className='text-[13px]'>Selecy your place</div>
        </div>
          {isOpen ? (<RiArrowDownSLine className='dropdown-icon-secondary'/>) : (<RiArrowUpSLine className='dropdown-icon-secondary'/>)}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {countries.map((country,i)=>{
          return(
            <Menu.Item as='li' key={i} className='cursor-pointer hover:text-violet-800 transition'
             onClick={()=>setCountry(country)}>{country}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

