import React, { useContext, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from "react-router-dom";
import FormInput from '../components/formInput';
import { Items } from '../provider/provider'

const ForgotPassword = () => {
      const history = useHistory();
      const {setLoginInput,EmailAuth} = useContext(Items);
      return (
            <Layout>
                  <div className='h100 flex justify-center'>
                        <div className='form w-8 flex-col justify-start items-center'>
                                    <div className='flex justify-center items-center mt-6'>
                                          <IconStartBracket />
                                          <IconDash />
                                          <IconEndBracket />
                                    </div>
                                    <div class="font-lobster c-primary fs-56 lh-70 flex justify-center items-center">Boginoo</div>
                                    <div className='mt-5 c-primary fs-30 lh-70 flex justify-center items-center bold font-ubuntu'>Нууц үг сэргээх</div>      
                                    <div className="flex items-center justify-center mt-4 fs-14 text-center">Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</div>
                                    <FormInput classContainer="mt-5" textClass="ml-4" text="Цахим хаяг" className="w-8 h-5 mt-3" placeholder="name@mail.com" id="forgotMail"/>
                                    <Button className="btn font-ubuntu fs-15 lh-23 bold c-default h-5 w-8 ph-4 b-primary mt-5" disabled={true} onClick={()=>EmailAuth()}>Илгээх</Button>
                                    <div className="underline mt-4 c-primary" onClick={()=>history.push("/login")}>Бүртгүүлсэн бол энд дарна уу</div>
                        </div>
                  </div>
            </Layout>
        )
}
export default ForgotPassword;