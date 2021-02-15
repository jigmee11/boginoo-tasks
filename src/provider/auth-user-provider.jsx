import React, { createContext, useContext, useState, useEffect } from 'react'
import {auth} from '../components/firebase'

export const AuthUser = createContext();

const AuthUserProvider = (props) => {
      const [state,setState] = useState({user: null, userReady: false});
      useEffect(()=> {
            console.log(localStorage.getItem("user"));
            if(!auth){
                  return;
            }
            let user = localStorage.getItem("user");
            const subscribe = ()=>{
                  if(user=="null"){
                        setState({user: "", userReady: false});
                  }
                  else{
                        setState({user: user, userReady: true});
                  }
            }
            subscribe();
            return () => subscribe();
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