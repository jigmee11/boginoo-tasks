import React from 'react'

const LoadingAnimation = (props)=> {
      const {isFullDisplay,...others} = props;
      return(
            <div {...others} className={`flex ${isFullDisplay==true ? "full-display" : ""} justify-center items-center justify-center`}><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
      );
}
export default LoadingAnimation;