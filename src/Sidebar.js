import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import'./Sidebar.css';


function Sidebar() {
    const user =useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p> {topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src ='https://c4.wallpaperflare.com/wallpaper/226/117/132/peaky-blinders-wallpaper-preview.jpg'
            alt=''/>
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}
            </Avatar>
            <h2>{user.displayname}</h2>
            <h4>{user.email} </h4>
        </div>
    <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>1,002</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>32,002</p>

        </div>
        </div>       
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwarenegineering')}
            {recentItem('design')}
            {recentItem('developer')}

        </div>
    </div>
  )
}

export default Sidebar