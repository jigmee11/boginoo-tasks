import React, { createContext, useContext, useState } from 'react'
import {firebase,auth} from '../components/firebase'
export const Items = createContext();

const Provider = (props) => {
      const [loginInput, setLoginInput] = useState({registerMail: "", registerPass: "", registerPassConfirm: "", loginMail: "", loginPass: "",forgotMail: "",remember: false});
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