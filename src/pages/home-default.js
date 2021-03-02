import React, { useContext, useEffect, useState, useRef } from 'react';
import randomstring from 'randomstring'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { db } from '../components/firebase'
import { Items } from '../provider/provider';
import { AuthUser } from '../provider/auth-user-provider';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useCollection} from '../provider/useCollection'
import QRCode from 'qrcode'
import LoadingAnimation from '../components/loadingAnimation';
import HomeList from '../components/home-list';

export const HomeDefault = () => {
    const { state } = useContext(AuthUser);
    const { loginInput,setLoginInput } = useContext(Items);
    const { data, dataDownloaded, createDoc, updateDoc, deleteDoc } = useCollection(state.user);
    const [warning, setWarning] = useState("");
    const boginoo = async () => {
        if (state.user == null || state.user == "null"|| state.user=="") {
            setWarning("Нэвтрэх хэрэгтэй");
            return;
        }
        if(loginInput.url.length<6){
            setWarning("not real url");
            return;
        }
        const shortenedURL = randomstring.generate(6);
        const data = {
            email: state.user,
            inputUrl: loginInput.url,
            outputUrl: `https://short-1.web.app/${shortenedURL}`,
            id: shortenedURL
        }
        createDoc(state.user,data,shortenedURL);
        setLoginInput((old)=>({...old,  url: ""}));
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            boginoo();
        }
      }
    return (
        <Layout>
            <div className={`h100 flex flex-col align-center ${data.length>0 ? "justify-start pa-6" : 'justify-center'}`}>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div class="font-lobster c-primary fs-56 lh-70 flex justify-center items-center">Boginoo</div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='h-5 w-9 ' placeholder='https://www.web-huudas.mn' id="url" value={loginInput.url} onKeyDown={(e)=>handleKeyDown(e)} changeWarning={()=>setWarning()}/>
                    <Button onClick={() => boginoo()} className="btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary" page="/" disabled={loginInput.url.length>5 ? false : true}>Богиносгох</Button>
                </div>
                <p className="warning">{warning}</p>
                {dataDownloaded==false ? <LoadingAnimation isFullDisplay={false}/> 
                  : data.length>0 ?  <div className="flex flex-col justify-center items-center mt-5">
                  <div className="history bold primary-color fs-20">Түүх</div>
                  <div className="flex-col justify-center">
                      {data.map((item,i) => {
                          return(
                              <HomeList item={item} i={i} state={state}/>
                          )
                      })}
                  </div>
              </div> : <></>
              }
            </div>
        </Layout>
    )
}