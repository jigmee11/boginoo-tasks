import React from 'react';
import { Navigation } from './';

export const LoginLayout = ({ children }) => {
    /*
        Layout component маань хуудсаа бүтэн дүүргэдэг байна
            hint: style={{ width: '100vw', height: '100vh' }}
        
            Дотор нь 3 элемент баганын дагуу байрлана flex-col class-ийг ашиглаарай

            Хамгийн эхэнд 
                - Navigation component
                - Үндсэн харуулах component-ууд
                - Footer хэсэг

            
            Layout component-ийн кодыг маш сайн ойлгох

    */
    return (
        <div className='flex flex-col items-center pa-3' style={{ width: '100vw', height: '100vh' }}>
            {/* NAVIGATION */}
            <Navigation page="login"/>
            {/* MAIN CONTENT */}
            <div className='w100 flex-1'>
                {children}
            </div>
            {/* FOOTER */}
            <div className='font-ubuntu fs-16 lh-18'>
                Made with ♥️ by Nest Academy
            </div>
            <div className='font-ubuntu fs-16 lh-18' style={{ opacity: 0.2 }}>
                ©boginoo.io 2021
            </div>
        </div>
    );
};
export default LoginLayout;