import React, { useContext, useEffect, useState, useRef } from 'react';
import {useCollection} from '../provider/useCollection'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AuthUser } from '../provider/auth-user-provider';
import QRCode from 'qrcode'

const HomeList = ({item,i,state}) => {
      const { deleteDoc } = useCollection(state.user);
      const canvas = useRef();
      const [showCanvas,setCanvas] = useState(false);
      const hideCanvas = () => {
            setCanvas(false);
      }
      const showQr = (url) => {
            QRCode.toCanvas(canvas.current, url, function (error) {
                if (error) console.error(error)
                console.log('success!');
                setCanvas(true);
          })
      }
      return(
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
                        <canvas ref={canvas} onClick={()=>hideCanvas()}  style={{display: showCanvas==false ? "none": "block"}} ></canvas>
                        <div style={{display: showCanvas==false ? "block" : "none"}} onClick={()=>showQr(item.outputUrl)}>Show QR code</div>
                    </div>
                </div>
            </div>
      );
}
export default HomeList;