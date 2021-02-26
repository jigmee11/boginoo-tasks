import React, { createContext, useContext, useEffect, useState,  } from 'react'
import {firebase,auth,db} from '../components/firebase'
import { useLocation,useHistory,Redirect } from "react-router-dom";
export const Items = createContext();

const Provider = (props) => {
      const [loginInput, setLoginInput] = useState({registerMail: "", registerPass: "", registerPassConfirm: "", loginMail: "", loginPass: "",forgotMail: "",remember: false,url: ""});
      const EmailAuth = () => {
            auth.sendPasswordResetEmail(loginInput.forgotMail).then(function() {
            }).catch(function(error) {
            });             
      }    
      return(
            <Items.Provider value={{loginInput,setLoginInput,EmailAuth}}>
                  {props.children}
            </Items.Provider>
      );
}
export default Provider;