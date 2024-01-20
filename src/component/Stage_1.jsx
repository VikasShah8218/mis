import { click } from "@testing-library/user-event/dist/click";
import React, { useState , useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {getFromServer,isFullscreen , requestFullscreen} from "../requests"
const Stage_1 = (props) => {
  const audio = new Audio(props.song);
  const Msg = useRef(null);
  const navigate = useNavigate();
  const [text,setText] = useState("Which of these do you know?");
  const [click,setClick] = useState(1);
  const [answer1,setAnswer1] = useState("");
  const [answer2,setAnswer2] = useState("");
  const [message,setMessage] = useState("");
  const rawMessage = `  Lorem ipsum, dolor sit amet consectetur adipisicing 
  elit. Pariatur corrupti nemo rerum impedit facilis provident voluptate earum
   error. Libero, recusandae modi rerum eveniet id voluptate dicta aspernatur ap
   eriam. Animi, nam.
  `;
  const to = "vikasshah8218@gmail.com"
  var randomIndex = 0;
  var OTP = 0;
  function getOtp() {
    const otp = [5686,9875,9856,1235,7856,1355,2016,9824,1056,2089]
    randomIndex = Math.floor(Math.random() * otp.length);
    return otp[randomIndex];
  }

  const sendEmail = async(to,msg) =>{
    const data = await getFromServer(`send-email/${to}/${msg}`);
    console.log(data.data);
  }

  function checkPassword() {
    
    if (!isFullscreen()) {
      requestFullscreen(document.documentElement);
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
  

    let data = document.getElementById("PASSWORD");
    data = data.value.replace(/\s/g, "").toLowerCase();
    if (data == "aashigoyal") {
      console.log("password is correct");
      sendEmail(to,"Password Don");
      const stage_1 = document.getElementById("stage-01")
      const stage_2 = document.getElementById("stage-02")
      if(stage_2.style.display == "none"){
        stage_1.style.display ="none";
        stage_2.style.display = "flex";
      }
    } else {
      let div = document.getElementById("MSG");
      div.querySelector("h2").innerHTML = "Password Incorrect";
      div.querySelector("h4").innerHTML = "Your password is incorrect <br> Hint: Full Name";
      div.style.display = "flex";
    }
  }
  function checkCode() { 
    
    if (!isFullscreen()) {
      requestFullscreen(document.documentElement);
    }
    let data = document.getElementById("CODE");
    data = data.value.replace(/\s/g, "");
    if (data == "8708934097") {
      console.log("password is correct");
      sendEmail(to, "Code Don 2nd Round");
      const stage_2 = document.getElementById("stage-02")
      const stage_3 = document.getElementById("stage-03")
      if(stage_3.style.display == "none"){
        stage_2.style.display ="none";
        stage_3.style.display = "flex";
      }
    } else {
      let div = document.getElementById("MSG");
      div.querySelector("h2").innerHTML = "Code Incorrect";
      div.querySelector("h4").innerHTML = "Your code is incorrect enter your 10 digit code| Hint: ********97 ";
      div.style.display = "flex";
    }
  }
  function checkEmail() { 
     
    if (!isFullscreen()) {
      requestFullscreen(document.documentElement);
    }

    let data = document.getElementById("EMAIL");
    data = data.value.replace(/\s/g, "").toLowerCase();
    if (data == "aashigoyal77@gmail.com") {
      console.log("password is correct");
      sendEmail(to,"Email don 3rd Round");
      const stage_3 = document.getElementById("stage-03")
      const stage_4 = document.getElementById("stage-04")
      if(stage_4.style.display == "none"){
        stage_3.style.display ="none";
        stage_4.style.display = "flex";
      }
    } else {
      let div = document.getElementById("MSG");
      div.querySelector("h2").innerHTML = "Address Incorrect";
      div.querySelector("h4").innerHTML = "Your Password is incorrect enter your code| Hint: ******7@g***.com";
      div.style.display = "flex";
    }
  }
  function checkRelation() {
    
    if (!isFullscreen()) {
      requestFullscreen(document.documentElement);
    }

    if(click === 1){
      let inputs = document.getElementById("group2");
      inputs = inputs.querySelectorAll("input");
      for (let i = 0; i < inputs.length; i++) {
     
          if(inputs[i].checked){    
              window.answer1 = inputs[i].value;        
              console.log(inputs[i].value)
              document.getElementById("group2").style.display = "none";
              setText(`Who is ${inputs[i].value} ?`);
              document.getElementById("group3").style.display = "grid";
              
          }
       } 
       setClick(0);
       
      }
    else if(click == 0){
      let inputs2 = document.getElementById("group3");
      inputs2 = inputs2.querySelectorAll("input");
      for (let i = 0; i < inputs2.length; i++) {        
        if(inputs2[i].checked){window.answer2 =  (inputs2[i].value); console.log(inputs2[i].value)}
        else(console.log("NOthing"))
        
      }

      if(window.answer1 == 'Kaku' && window.answer2 == "Bhaai" ){
          // navigate("/email-check");
          sendEmail(to,"Relation Ok 4th round");
          OTP = getOtp();
          sendEmail(to,`Your-OTP-is-${OTP}`);
          document.getElementById("group2").style.display = "grid";
          document.getElementById("group3").style.display = "none";
          let div = document.getElementById("MSG");
          div.querySelector("h2").innerHTML = "An OTP has been send to your mail";
          div.querySelector("h4").innerHTML = "Check your Span Email , <br> if not found in INBOX";
          div.style.display = "flex";

          const stage_4 = document.getElementById("stage-04")
          const stage_5 = document.getElementById("stage-05")
          if(stage_5.style.display == "none"){
            stage_4.style.display ="none";
            stage_5.style.display = "flex";
          }
      }
      else{
        document.getElementById("group2").style.display = "grid";
        document.getElementById("group3").style.display = "none";
        setText(`Which of these do you know?`);
        let div = document.getElementById("MSG");
        div.querySelector("h2").innerHTML = "Answer Incorrect";
        div.querySelector("h4").innerHTML = "Your Answer is incorrect";
        div.style.display = "flex";
        setClick(1);
      }
    }
  }
  function lastCheck(){
 
    
    const password = document.getElementById("LASTPASSWORD").value;
    const stage_5 = document.getElementById("stage-05")
    if(password === OTP.toString()){
      sendEmail(to,"OTP done 5th round");
      if(stage_5.style.display != "none"){
        stage_5.style.display ="none";
        showMessage();
      }

    }
    else{
      document.getElementById("group2").style.display = "grid";
      document.getElementById("group3").style.display = "none";
      let div = document.getElementById("MSG");
      div.querySelector("h2").innerHTML = "OTP Incorrect";
      div.querySelector("h4").innerHTML = "Your otp is incorrect, Check your SPAN email if not found in INBOX";
      div.style.display = "flex";  
      let b =  setInterval(()=>{
        window.location.href = '/';
      },10000);
    }
  }
  function showMessage(){
    
    if (!isFullscreen()) {
      requestFullscreen(document.documentElement);
    }
    if(document.getElementById("blackpaper").style.display == "none" && document.getElementById("main-message").style.display == "none"){
      document.getElementById("blackpaper").style.display = "block";
      document.getElementById("main-message").style.display = "block";
    }
    sendEmail(to,"Message is now showing");
    let curser = 0;
    let a =  setInterval(()=>{
        Msg.current.innerHTML += rawMessage[curser];
        Msg.current.focus();
        curser = curser+1;
        if(!rawMessage[curser])(clearInterval(a));
      },150);
    let b =  setInterval(()=>{
        // window.location.reload();
        window.location.href = '/';
        sendEmail(to , "Message is over");

      },280000);
      // },80000);
  }

  return (
    <>
    <div className="wrappers  login-box stage" id="stage-01">
      <div>
        <h2>Verification-1</h2>
        <h4>
          Enter your password to procceed next <br /> page and your password
          is your Name
        </h4>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" id="PASSWORD" required />
          <label>Password</label>
        </div>
        <button type="button" onClick={checkPassword}>
          Verify
        </button>
      </div>
    </div>

    <div className="wrappers  login-box stage" id="stage-02" style={{display:"none"}}>
      <div>
        <h2>Verification-2</h2>
        <h4>
          Enter 10 Digit Code  <br/>Hint : Number
        </h4>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" id="CODE" required />
          <label>CODE</label>
        </div>
        <button type="button" onClick={checkCode}>
          Verify
        </button>
      </div>
    </div>

    <div className="wrappers  login-box stage" id="stage-03" style={{display:"none"}}>
      <div>
        <h2>Verification-3</h2>
        <h4>
          Enter your Address Password  <br/>Hint : ******7@g***.com
        </h4>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" id="EMAIL" required />
          <label>Address</label>
        </div>
        <button type="button" onClick={checkEmail}>
          Verify
        </button>
      </div>
    </div>

    <div className="wrappers  login-box stage" id="stage-04" style={{display:"none"}}>
      <div>
        <h2>Verification-4</h2>
        <h4>
            {text} <br/>
        </h4>
        <div className="input-box">
          
          {/* <input type="password" id="KNOW" required />
          <label>Address</label> */}
          <fieldset id="group2">
            <div className="input-box-1"> <label htmlFor="I-1" >Arnu</label><input type="radio" id="I-1" value="Arnu" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-2" >Alex</label><input type="radio" id="I-2" value="Alex" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-3" >Lisa</label><input type="radio" id="I-3" value="Lisa" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-4" >Jake</label><input type="radio" id="I-4" value="Jake" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-5" >Isau</label><input type="radio" id="I-5" value="Isau" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-6" >Kaku</label><input type="radio" id="I-6" value="Kaku" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-7" >Omau</label><input type="radio" id="I-7" value="Omau" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-8" >John</label><input type="radio" id="I-8" value="John" name="group2" /></div>
            <div className="input-box-1"> <label htmlFor="I-9" >Mark</label><input type="radio" id="I-9" value="Mark" name="group2" /></div>
          </fieldset>
          <fieldset id="group3" style={{display:"none"}}>
            <div className="input-box-1"> <label htmlFor="I-01" >Papa</label><input type="radio" id="I-01" value="Papa" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-02" >Mummy</label><input type="radio" id="I-02" value="Mummy" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-03" >Chacha</label><input type="radio" id="I-03" value="Chacha" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-09" >Bhaai</label><input type="radio" id="I-09" value="Bhaai" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-04" >Mosa</label><input type="radio" id="I-04" value="Mosa" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-05" >Tau</label><input type="radio" id="I-05" value="Tau" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-06" >Dada</label><input type="radio" id="I-06" value="Dada" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-07" >Mama</label><input type="radio" id="I-07" value="Mama" name="group3" /></div>
            <div className="input-box-1"> <label htmlFor="I-08" >Uncle</label><input type="radio" id="I-08" value="Uncle" name="group3" /></div>
          </fieldset>
        </div>
        <button type="button" onClick={checkRelation}>
          Verify
        </button>
      </div>
    </div>

    <div className="wrappers  login-box stage" id="stage-05" style={{display:"none"}} >
      <div>
        <h2>Verification-5</h2>
        <h4>
          
            Enter the Password which  <br/> is send to your Email ID 
        </h4>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input  id="LASTPASSWORD" required />
          <label>Password</label>
        </div>
        <button type="button" onClick={lastCheck}>
          View Message
        </button>
      </div>
    </div>

    <div className="blackpaper" id="blackpaper" style={{display:"none"}}></div>
    

    <div className="SecreateMsg" id="main-message" ref={Msg} style={{display:"none"}}>
      <h1 style={{color:"white"}} onClick={showMessage}>Message</h1>
    </div>


    </>
  );
};

export default Stage_1;
