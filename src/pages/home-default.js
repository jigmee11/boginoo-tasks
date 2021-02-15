import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col justify-center align-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div class="font-lobster c-primary fs-56 lh-70 flex justify-center items-center">Boginoo</div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='h-5 w-8 ' placeholder='https://www.web-huudas.mn'/>
                    <Button className="btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary" page="/" disabled={false}>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}