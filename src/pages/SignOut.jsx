import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userLogout } from '../store/reducer.js';
import { persistor } from '../store/store.js'; 
function SignOut() {
  const navigate = useNavigate();
let dispatch = useDispatch();


  useEffect(() => {
    let signout = async () => {
      try {
          const response = await axios.post('https://chat-app-backened-beta.vercel.app/user/sign-out', {}, {
            withCredentials: true, // Include credentials (cookies) with the request
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_TOKEN',
            }
          });
          console.log('Signed out successfully:', response.data);
  persistor.purge();
  dispatch(userLogout());
    } catch (error) {
        console.error('Error submitting form:', error);
        console.log("error")
      } finally {
        navigate("/")
      }
    }
    signout();
  }, [])
  return (
    <>
    </>
  )
}

export default SignOut
