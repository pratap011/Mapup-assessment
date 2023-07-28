import React, { useState } from 'react'
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import {changeLocation} from './redux/location'
import {useDispatch,useSelector} from 'react-redux'

const FormInput = () => {
    //The useDispath hook is used here to alter the state of the redux toolkit store based on the user choice and input.

    const dispatch=useDispatch();
    const [option,setOption]=useState('Select Country')


    const handlemenuclick= (e) => {
        //This function takes in the user input and changes the state in redux to that specific country.
        setOption(e.key);
      };
    
      const handleSubmitClick = ()=>{
          dispatch(changeLocation(option));
      }


    //the options available for the users with it's key.
    const items= [
        {
          label: 'India',
          key: 'India',
        },
        {
          label: 'United States',
          key: 'United States',
        },
        {
          label: 'United Kingdom',
          key: 'United Kingdom',
        }
    ]
    
    const menuProps={
        items,
        onClick:handlemenuclick
    }

  return (
    <div style={{display:"flex", justifyContent:"space-evenly",width:"40%"}}>
    <div className='inputsection'>
    <Dropdown.Button style={{width:20}}size='medium' menu={menuProps}>
      {option}
    </Dropdown.Button>
    </div>
    <Button type="primary" size='medium' onClick={handleSubmitClick}>Load</Button>
    </div>

    
  )
}

export default FormInput