import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Items } from '../provider/provider';
import {auth} from '../components/firebase'

export const Button = (props) => {
    const history = useHistory();
    let { children, disabled, className, page, ...others } = props;
    /* 
        https://boginoo.firebaseapp.com/button

        Button component-ийн жишээ

            <Button>Богиносгох</Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>Нэвтрэх</Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' disabled>Нэвтрэх</Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={() => {console.log('LOGIN!')}}>Нэвтрэх</Button>

        - children props -ийг button element-ийн тодор render хийнэ

        - className props -оор дамжуулан button-ний style өөрчилж болдог байх

        - disabled class -ийг components.scss file-д тодорхойлж бичих pointer-events, opacity тохируулах

        - бусад дамжуулсан others props ийг button элемэнт дээр нэмж өгөх ингэснээр onClick event өөр ямар хамаагүй props-ийг нэмж ашиглах боломжтой болно

        HINT: className={`btn ${className} ${disabled && 'disabled'}`}
      
    */
    return (
        <button className={`btn ${className} ${disabled&&"disabled"}`} {...others}>{children}</button>
    );
};
           