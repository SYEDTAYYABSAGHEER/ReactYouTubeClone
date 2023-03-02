import React from 'react'
import {Paper,IconButton} from "@mui/material";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {Search} from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper component={'form'} sx={{borderRadius:20,border: '1px solid #e3e3e3', pl: 2,boxShadow: 'none', mr: {sm:5}}}>
        <input className="search-bar" placeholder="Search .." onChange={() => {}} />
        <IconButton type="submit" sx={{color:'red',p:'10px'}}>
            <Search/>
        </IconButton> 
    </Paper>
  )
}

export default SearchBar
