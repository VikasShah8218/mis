import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div className="wrappers">
      <div className="action" id="Action" style={{display:"none"}}>
        <div className="action-msg">
          <h2>Did you read the Disclaimer</h2>
        </div>
        <div className="action-button">
          <button> <Link to="first-check">Yes</Link></button>
          <div className="empty"></div>
          <button>NO</button>
        </div>
      </div>
      
      <div className="login-box" >
        <div className="inner" >
        <h2>Secrate Meaasge </h2>
          <h4>
            Sweet talks, often regarded as the art of expressing oneself in a gentle, kind, and pleasing manner, hold a special place in the realm of human interaction. These tender words, spoken with care and consideration, have the power to create an atmosphere of warmth and connection. Sweet talks go beyond mere verbal communication; they embody a sincerity that resonates deeply with both the speaker and the listener.
            In the tapestry of relationships.
          </h4>      
          <button>Verify</button>         
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
