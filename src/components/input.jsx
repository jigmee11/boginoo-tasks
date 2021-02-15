import React, { useContext } from 'react';
import { Items } from '../provider/provider';

export const Input = (props) => {
    let { className, ...others } = props;
    const {setLoginInput} = useContext(Items);
    const inputHandler = (value,id,type,checked) => {
        if(type=="checkbox"){
            setLoginInput(old=>{
                console.log(checked);
                return{...old,  "remember": checked};
            })
        }
        else{
            setLoginInput(old=>{
                return{...old,  [id]: value};
            })
        }
    }
    /* 
        https://boginoo.firebaseapp.com/input

        Input component-ийн жишээ

            <Input className='h-5 w-8' placeholder='https://www.web-huudas.mn' />
            <Input className='h-5 w-8' placeholder='password' type='password' />

        - className props -оор дамжуулан button-ний style өөрчилж болдог байх

        - бусад дамжуулсан others props ийг button элемэнт дээр нэмж өгөх ингэснээр onClick event өөр ямарч хамаагүй props-ийг нэмж ашиглах боломжтой болно

        HINT: className={`input ${className}`}
      
    */


    return (
        <div>
            <input className={`input ${className}`} {...others} onChange={(e)=>inputHandler(e.target.value,e.target.id,e.target.type,e.target.checked)}/>
        </div>
    );
};