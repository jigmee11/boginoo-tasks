import React, { useContext, useEffect, useRef, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from "react-router-dom";
import { Items } from '../provider/provider';
import {auth} from '../components/firebase'
import FormInput from '../components/formInput';
import { AuthUser } from '../provider/auth-user-provider';
import {Redirect} from "react-router-dom";
import '../style/loadingAnimation.scss'
export const Login = () => {
      const history = useHistory();
      const {state,setState} = useContext(AuthUser);
      const {loginInput} = useContext(Items);
      const login =()=>{
            auth.signInWithEmailAndPassword(loginInput.loginMail, loginInput.loginPass)
            .then((userCredential) => {
              var user = userCredential.user;
              history.push("/");   
              if(loginInput.remember){
                  localStorage.setItem("user", loginInput.loginMail);  
              }
              setState({user: loginInput.loginMail, userReady: true});    
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);
            });          
      }
    return (
          <>
            {state.user==null ? <div className="full-display flex justify-center items-center justify-center"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
            : state.userReady ? history.push("/")
               : <Layout>
                        <div className='h100 flex justify-center'>
                              <div className='form w-8 flex-col justify-start items-center'>
                                          <div className='flex justify-center items-center mt-6'>
                                                <IconStartBracket />
                                                <IconDash />
                                                <IconEndBracket />
                                          </div>
                                          <div class="font-lobster c-primary fs-56 lh-70 flex justify-center items-center">Boginoo</div>
                                          <div className='mt-5 c-primary fs-32 lh-70 flex justify-center items-center bold font-ubuntu'>Нэвтрэх</div>      
                                          <FormInput classContainer="mt-4" textClass="ml-4" text="Цахим хаяг" className="w-8 h-5 mt-3" placeholder="name@mail.com" id="loginMail"/>
                                          <FormInput classContainer="mt-5" textClass="ml-4" text="Нууц үг" className="w-8 h-5 mt-3" type="password" id="loginPass"/> 
                                          <div className="flex justify-between w-8 mt-5 ">
                                                <div className="flex justify-between c-primary">
                                                      <Input type="checkbox" />
                                                      <div>Намайг сана</div>
                                                </div>
                                                <div className="underline" onClick={()=>history.push("/forgot-password")}>Нууц үгээ мартсан</div>
                                          </div>
                                          <Button className="btn font-ubuntu fs-15 lh-23 bold c-default h-5 w-8 ph-4 b-primary mt-5" disabled={false} onClick={()=>login()}>Нэвтрэх</Button>
                                          <div className="underline mt-4 c-primary" onClick={()=>history.push("/register")}>Шинэ хэрэглэгч бол энд дарна уу</div>
                              </div>
                        </div>
                  </Layout>}
          </>
    )
}
export default Login;