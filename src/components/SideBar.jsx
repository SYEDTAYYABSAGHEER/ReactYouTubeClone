import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utilis/constants'

const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack   sx={{overflowY: 'auto', height:{sx: "auto", md: "95%", flexDirection: {sx: 'row', md: 'column'}, display: {md: 'grid',sx: 'flex'}}}}>
        { categories.map((category)=> {
            return (
            <button className='category-btn' style={{background: category.name === selectedCategory && "red",color: "white"}} key={category.name} onClick={ () => { setSelectedCategory(category.name)}}>
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
            )
        })}

    </Stack>
  )
}

export default SideBar
