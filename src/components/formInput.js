import React from 'react'
import { Input } from './input'

const FormInput = (props) => {
      const {text,classContainer,textClass, ...others} = props;
      return(
            <div className={classContainer}>
                  <label className={textClass}>{text}</label>
                  <Input {...others}/>
            </div>
      );
}
export default FormInput;