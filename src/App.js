import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login,logout,selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from "./Login";
import {useEffect} from 'react'
import Widgets from './Widgets';

function App() {
 
  const user = useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))

      }else{

          dispatch(logout());
      }
      })
    },[])
  

  

  return (
    <div className="app">
      
      {!user?(
        <Login/>
      ) :(
        <Fragment>
          <Header/>
      <div className='app__body'>
        <Sidebar />
        <Feed/>
        <Widgets/>
      </div>
      </Fragment>
      )}
    </div>
  );
}

export default App;
