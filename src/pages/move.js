import React, { createContext, useContext, useEffect, useState,  } from 'react'
import {firebase,auth,db} from '../components/firebase'
import { useLocation,useHistory,Redirect } from "react-router-dom";
import '../style/loadingAnimation.scss'
import { configure } from '@testing-library/react';
import request from 'request'
import LoadingAnimation from '../components/loadingAnimation';

const Move = () => {
      const location = useLocation();
      const history = useHistory();
      useEffect(()=>{
            if(location.pathname=="/"){
                  return;
            }
            db.collection("short-urls").doc(location.pathname).get().then((doc)=>{
                  if(doc.exists){
                        let url = doc.data().inputUrl;
                        let check = "https://";
                        if(url.includes(check)==false){
                              url = check.concat('',url);
                              console.log(url);
                        }
                        window.location.href = url;
                  }
                  else{
                        alert("invalid")
                  }
            })
      },[location]);   
      return(
            <LoadingAnimation/>
      );
}
export default Move;