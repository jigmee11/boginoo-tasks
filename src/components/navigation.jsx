import React, { useContext, useEffect } from "react";
import { AuthUser } from "../provider/auth-user-provider";
import { Button } from "./";
import { auth } from "./firebase";
import { useHistory, useLocation } from "react-router-dom";
import "../components/firebase";

export const Navigation = ({ page }) => {
  const { state, setState } = useContext(AuthUser);
  const location = useLocation();
  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.setItem("user", null);
        setState({ user: "", userReady: false });
      })
      .catch((error) => {});
  };
  return (
    <div className="w100 flex justify-end items-center">
      <div className="font-ubuntu fs-20 lh-23 bold c-primary">
        ХЭРХЭН АЖИЛЛАДАГ ВЭ?
      </div>
      {/* <div class="dropdown">
                <p>{state.user}</p>
                <button onClick={()=>SignOut()} class="dropbtn"><svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L10.5 10.5L19 2" stroke="#02B589" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <div class="dropdown-content">
                    <a href="#">Log out</a>
                </div>
            </div> */}
      {/* {location.pathname=="/" ? state.userReady ? <div className="w-5 ml-4" onClick={()=>SignOut()}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" class="svg-inline--fa fa-sign-out-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg></div> : <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' page="/login">Нэвтрэх</Button> : <></> 
            } */}
      {location.pathname == "/" ? (
        state.userReady ? (
          <div className="ml-6 flex items-center mr-5">
            <p className="fs-20 font-ubuntu">{state.user}</p>
            <div class="dropdown">
              <button class="dropbtn ml-4">
                <svg
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10.5 10.5L19 2"
                    stroke="#02B589"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="dropdown-content ml-4">
                <a href="#" onClick={() => SignOut()} className="mt-4">
                    Гарах
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Button
            className="font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary"
            page="/login"
          >
            Нэвтрэх
          </Button>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
