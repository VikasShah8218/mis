import React from "react";
import {getFromServer} from "../requests"

import { Link } from "react-router-dom";
// send-email/<int:stage></int:stage>
// shah-market-backend.techkingdom.in
// cclrmypyxzserlsp
// 70C9DD4EEB6E4E74CB06EBC3FD474EB002D2
const Home = (props) => {
  const audio = new Audio(props.song);
  // setInterval(()=>{
  //   if (!isFullscreen()) {
  //     requestFullscreen(document.documentElement);
  //   }
  // },3000);

  const sendEmail = async(e) =>{
    const data = await getFromServer(`send-email/${e}`);
    console.log(data.data);
  }

  function action(){
    console.log("You are write 1")

    const action  = document.getElementById("Action")
    console.log(action.style.display)
    if(action.style.display == "none"){
    console.log("You are write 2")

    // action.classList.add("action-activate");
    action.style.display = "flex";
    setTimeout(() => {
      action.style.opacity = "1";
    }, 1);
    console.log("You are write")
    }
    else{
      setTimeout(() => {
      action.style.display = "none";

      }, 1000);
      action.style.opacity = "0";

      // action.style.opacity = "0";
    }
  }
  function playSong(){
    sendEmail(0);
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      // If in fullscreen, exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      // If not in fullscreen, go fullscreen
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  if(window.isPlaying != 1){
  audio.play();
  audio.volume = 0.2;
  setInterval(()=>{
    window.isPlaying = 1;
    audio.play();
    audio.volume = 0.2;
  },480000);
  }

  }
  return (
    <div className="wrappers">
      <div className="action" id="Action" style={{display:"none"}}>
        <div className="action-msg">
          <h2>Did you read the Disclaimer</h2>
        </div>
        <div className="action-button">
          <button> <Link to="/first-check" onClick={playSong} >Yes</Link></button>
          <div className="empty"></div>
          <button onClick={action} >NO</button>
        </div>
      </div>
      
      <div className="login-box" >
        <div className="inner" >
          <h2>Secrate Meaasge </h2>
          <h4>
            There is a Secrate Meaasge from YouKnow <br />
            It is very important that this message reaches the person for whom this message has been written. <br/>
            So we have to Verify the Person with different password and questions for deliver the message.
          </h4>      
          <button onClick={action} >Verify</button>         
        </div>
      </div>
      
      <div className="login-box box-1" id="1"  style={{display:"none"}}cc>
        <h1>
        Sweet talks, often regarded as the art of expressing oneself in a gentle, kind, and pleasing manner, hold a special place in the realm of human interaction. These tender words, spoken with care and consideration, have the power to create an atmosphere of warmth and connection. Sweet talks go beyond mere verbal communication; they embody a sincerity that resonates deeply with both the speaker and the listener.
        In the tapestry of relationships, sweet talks act as threads that weave moments of joy, comfort, and understanding. They serve as a reminder that words, when chosen thoughtfully, can be a source of solace and delight. A compliment delivered with sweetness can uplift spirits, making someone's day a little brighter. Similarly, a gentle word of encouragement has the power to inspire confidence and foster a positive environment.
        Sweet talks are not confined to romantic relationships; they play a crucial role in all aspects of life. In friendships, family dynamics, and professional settings, the ability to communicate kindly enhances the quality of connections. The impact of sweet talks extends beyond the immediate exchange of words; it contributes to the building of trust, empathy, and mutual respect.
        </h1>
      </div>
    </div>
  );
};

export default Home;
