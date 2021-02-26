import React, { useEffect, useState } from 'react'
import {firebase,db} from '../components/firebase'
import QRCode from 'qrcode'

export const useCollection = (path)=>{
      const [data, setData] = useState();
      useEffect(()=>{
            if(db&&path){
                  db.collection("users").doc(path).collection("history").onSnapshot((q)=>{
                        let data =  q.docs.map((item)=>{item = item.data(); return({...item,showQr: false})});
                        console.log(data);
                        setData(data);
                  })
            }
            return() => {}
      },[db,path]);
      const createDoc = (user, data,id) => {
            db.collection("short-urls").doc(id).set(data);
            db.collection("users").doc(user).collection("history").doc(id).set(data);
      }
      const deleteDoc = (user,id) => {
            db.collection("short-urls").doc(id).delete();
            db.collection("users").doc(user).collection("history").doc(id).delete();
      }
      const updateDoc = () => {
      }
      return{createDoc, deleteDoc, updateDoc, data};
}