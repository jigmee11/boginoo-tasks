import React, { createContext, useContext, useEffect, useState,  } from 'react'
import {firebase,auth,db} from '../components/firebase'
import { useLocation,useHistory,Redirect } from "react-router-dom";
import { configure } from '@testing-library/react';

export const AuthUser = createContext();

const AuthUserProvider = (props) => {
      const [state,setState] = useState({user: null, userReady: false});
      useEffect(()=> {
            if(!auth){
                  return;
            }
            let user = localStorage.getItem("user");
            const subscribe = ()=>{
                  if(user===null||user==="null"){
                        setState({user: "", userReady: false});
                  }
                  else{
                        setState({user: user, userReady: true});
                  }
            }
            subscribe();
      },[auth]);
      // console.log(state)
      // useEffect(() => {
      //       if(!auth){
      //             return;
      //       }
      //       const subscribe = auth.onAuthStateChanged((user)=> {
      //             user ? setState({user: user.email, userReady: true}) : setState({user: "", userReady: false});
      //       });
      //       return () => subscribe();
      // }, [auth])
      return(
            <AuthUser.Provider value={{state,setState}}>
                  {props.children}
            </AuthUser.Provider>
      );
}
export default AuthUserProvider;