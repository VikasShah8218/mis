import { click } from "@testing-library/user-event/dist/click";
import React, { useState , useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {getFromServer} from "../requests"
const Stage_1 = (props) => {
  
  const Msg = useRef(null);
  const navigate = useNavigate();
  const [text,setText] = useState("Which of these do you know?");
  const [click,setClick] = useState(1);
  const [answer1,setAnswer1] = useState("");
  const [answer2,setAnswer2] = useState("");
  const [message,setMessage] = useState("");
  const rawMessage = `Hey Aashi,   
  कैसे हो ,  सोच रही होगी कि मैं इस तरह message क्यों भेज रहा हूँ, Well, मैंने पहले भी try किया था लेकिन वो तुझ तक पहुंचा ही नहीं। खैर, तुझे याद है कि तूने मुझसे 
  अब से 2 साल पहले एक सवाल किया था और मैंने बड़ी ही विनम्रता से जवाब दिया कि "नहीं, मैं नहीं करता"। मैंने उस समय झूठ बोला क्योंकि मुझे लगा कि अगर मैंने "हा" 
  कर दी तो जो बातें हो रही हैं वो भी खत्म न हो जाएं तो मैंने कहा "नहीं"। well, सच बताऊं तो जो पहले लगता था अब उससे कहीं 100 गुना ज्यादा लगता है, कैसे बताऊँ। 
  मेरे हर सपने मैं  तेरा चेहरा दिखाई देता है, मेरे ख्यालों में बस तू चलती रहती है, खाना खाते, सोते, उठे बस तेरा चेहरा सामने दिखाई देता है, पता नहीं क्या अजीब सा हो गया
  ह, पहले मैं इतना इमोशनल नहीं था , अब 'Kung Fu Panda' देखकर भी रोना आ जाता है, तुझे मैंने block इसलिए नहीं किया था कि हमारी लड़ाई हो गई थी, वो तो बस 
  थोड़ी नाराजगी थी बस| खैर उसको भी तो काफी महीने हो गए हैं, मैंने block इसलिए किया था कि मैं तुझे भूलना चाहता था जो हो ही नहीं रहा। मैंने तेरे लिए वो watch भी 
  खरीद ली जो हम उस दिन देख रहे थे, पागल था मैं , मेरे अलमारी के कोने में एक खूबसूरत सा तोहफा रखा है, मैंने ये किसी को नहीं बताया पिछले 1.5 साल से। मैं अपने 
  client का फोन कट करके तुझसे बात करता था , मैं बस इतना कहना चाहता हूँ कि शायद " I Fall In LOVE WITH You"| इन दुनिया की हर हद पार करने के लिए तैयार 
  हूँ तेरे लिए, बस तू बोल। और कोई बात नहीं, अगर तुझे ये मंजूर नहीं। मुझे अपनी ज़िन्दगी से बस 1 समय चाहिए तेरे साथ, कि सूरज डूबते की शाम हो, मेरा हाथ तेरे हाथ में 
  और दोनों की आँखें नम हों, और बस दोनों चुप हों, कोई बात ना हो, भी फिर भी भरपूर बातें हों, बस यही समय चाहिए मुझे अपनी ज़िन्दगी से। और बस, मुझे कभी भूल मत 
  जाना|`


  const sendEmail = async(e) =>{
    const data = await getFromServer(`send-email/${e}`);
    console.log(data.data);
  }

  function checkPassword() {
    let data = document.getElementById("PASSWORD");
    data = data.value.replace(/\s/g, "").toLowerCase();
    if (data == "1") {
      console.log("password is correct");
      sendEmail(1);
      const stage_1 = document.getElementById("stage-01")
      const stage_2 = document.getElementById("stage-02")
      if(stage_2.style.display == "none"){
        stage_1.style.display ="none";
        stage_2.style.display = "flex";
      }
    } else {
      let div = document.getElementById("MSG");
      div.querySelector("h2").innerHTML = "Password Incorrect";
      div.querySelector("h4").innerHTML = "Your password is incorrect retry";
      div.style.display = "flex";
    }
  }
  function checkCode() {
    let data = document.getElementById("CODE");
    data = data.value.replace(/\s/g, "");
    if (data == "1") {
      console.log("password is correct");
      sendEmail(2);
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
    let data = document.getElementById("EMAIL");
    data = data.value.replace(/\s/g, "").toLowerCase();
    if (data == "1") {
      console.log("password is correct");
      sendEmail(3);
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
      console.log("*********************************************************************************************************");
      console.log(window.answer1 , window.answer2);
      console.log("*********************************************************************************************************");


      if(window.answer1 == 'Kaku' && window.answer2 == "Bhaai" ){
          // navigate("/email-check");
          sendEmail(4);
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
    if(password === "1"){
      sendEmail(5);
      if(stage_5.style.display != "none"){
        stage_5.style.display ="none";
        showMessage();
      }

    }
  }
  function showMessage(){
    if(document.getElementById("blackpaper").style.display == "none" && document.getElementById("main-message").style.display == "none"){
      document.getElementById("blackpaper").style.display = "block";
      document.getElementById("main-message").style.display = "block";
    }
    sendEmail(7);
    let curser = 0;
    let a =  setInterval(()=>{
        Msg.current.innerHTML += rawMessage[curser];
        Msg.current.focus();
        curser = curser+1;
        if(!rawMessage[curser])(clearInterval(a));
      },150);
    let b =  setInterval(()=>{
        window.location.reload();
        sendEmail(8);

      },250000);
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
      <h1 style={{color:"white"}} onClick={showMessage}>Mis Goyal</h1>
    </div>


    </>
  );
};

export default Stage_1;
