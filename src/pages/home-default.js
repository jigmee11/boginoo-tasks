import React, { useContext, useEffect, useState } from 'react';
import randomstring from 'randomstring'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { db } from '../components/firebase'
import { Items } from '../provider/provider';
import { AuthUser } from '../provider/auth-user-provider';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useCollection} from '../provider/useCollection'
import QRCode from 'qrcode'

export const HomeDefault = () => {
    const { state } = useContext(AuthUser);
    const { loginInput,setLoginInput } = useContext(Items);
    const { data, createDoc, updateDoc, deleteDoc } = useCollection(state.user);
    const boginoo = async () => {
        if (state.user == null || state.user == "null"|| state.user==""|| loginInput.url.length<6) {
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
    const [historyData, setData] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(!data){
            return;
        }
        setData(data);
    }, [state, db,data]);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            boginoo();
        }
      }
      const hideCanvas = (id) => {
            let newData = data;
            newData[id].showQr = false;
            setData(newData);
            setCount(count+1);
      }
      const showQr = (url,id) => {
            const canvas = document.getElementById(url);
            QRCode.toCanvas(canvas, url, function (error) {
                if (error) console.error(error)
                console.log('success!');
                let newData = data;
                newData[id].showQr = true;
                setData(newData);
                setCount(count+1);
          })
      }
    return (
        <Layout>
            <div className={`h100 flex flex-col align-center ${historyData.length>0 ? "justify-start pa-6" : 'justify-center'}`}>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div class="font-lobster c-primary fs-56 lh-70 flex justify-center items-center">Boginoo</div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='h-5 w-9 ' placeholder='https://www.web-huudas.mn' id="url" value={loginInput.url} onKeyDown={(e)=>handleKeyDown(e)}/>
                    <Button onClick={() => boginoo()} className="btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary" page="/" disabled={loginInput.url.length>5 ? false : true}>Богиносгох</Button>
                </div>
                {historyData.length>0 &&
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="history bold primary-color fs-20">Түүх</div>
                        <div className="flex-col justify-center">
                            {historyData.map((item,i) => {
                                return (
                                    <div className="flex-row mt-5 bottom-shadow items-center">
                                        <div className="flex-col justify-end word-wrap">
                                            <span className="grey fs-13">Өгөгдсөн холбоос:</span>
                                            <p className="fs-19 word-wrap w-8 mt-0">{item.inputUrl}</p>
                                        </div>
                                        <div className="ml-4 flex-row items-center">
                                            <div className="flex-col">
                                                <span className="grey fs-13">Богино холбоос</span>
                                                <p className="fs-19 small-url">{item.outputUrl}</p>
                                            </div>
                                            <div className="ml-6">
                                                <CopyToClipboard text={item.outputUrl}>
                                                    <a className="primary-color underline-primary">Хуулж авах</a>
                                                </CopyToClipboard>
                                            </div>
                                            <div className="ml-6">
                                                <i class="fas fa-trash fa-2x" style={{color: "#02B589"}} onClick={()=>{deleteDoc(state.user,item.id)}}></i>
                                            </div>
                                            <div className="ml-6">
                                                <canvas onClick={()=>hideCanvas(i)} id={item.outputUrl} style={{display: item.showQr==false ? "none": "block"}} ></canvas>
                                                <div style={{display: item.showQr==false ? "block" : "none"}} onClick={()=>showQr(item.outputUrl,i)}>Show QR code</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>}
            </div>
        </Layout>
    )
}