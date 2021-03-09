import React, { useContext, useEffect, useState } from 'react'
import {firebase,db} from '../components/firebase'
import QRCode from 'qrcode'
import { AuthUser } from './auth-user-provider';

export const useCollection = (path)=>{
      const [data, setData] = useState([]);
      const {state} = useContext(AuthUser);
      const [dataDownloaded, setDownloaded] = useState(false);
      const [uploading, setUploading] = useState(false);
      useEffect(()=>{
            if(state.user===""){
                  setDownloaded(true);
                  setData([]);
                  return;
            }
            if(db&&path){
                  db.collection("jigmee-users").doc(path).collection("history").onSnapshot((q)=>{
                        let data =  q.docs.map((item)=>{item = item.data(); return({...item,showQr: false})});
                        setData(data);
                        setDownloaded(true);
                        setUploading(false);
                  })
            }
            return() => {}
      },[db,path, state]);
      const createDoc = (user, data,id) => {
            db.collection("jigmee-short-urls").doc(id).set(data);
            setUploading(true);
            // db.collection("jigmee-users").doc(user).collection("history").doc(id).set(data);
      }
      const deleteDoc = (user,id) => {
            db.collection("jigmee-short-urls").doc(id).delete();
            db.collection("jigmee-users").doc(user).collection("history").doc(id).delete();
      }
      const updateDoc = () => {
      }
      return{createDoc, deleteDoc, updateDoc, data, dataDownloaded,uploading};
}