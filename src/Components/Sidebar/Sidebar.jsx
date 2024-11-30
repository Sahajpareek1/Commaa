import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [Extended, setExtended] = useState(false);

  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="Sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        {/*this is used to add multiple values */}

        {/*<img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
         this is more concise . good for single value*/}
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {Extended ? <p>New Chat</p> : null}
        </div>
        {Extended ? (
          <div className="Recent">
            <p className="Recent-Title">Recent</p>

            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="Recent-Entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="Bottom">
        <div className="Bottom-items Recent-Entry">
          <img src={assets.question_icon} alt="" />
          {Extended ? <p>Help</p> : null}
        </div>
        <div className="Bottom-items Recent-Entry">
          <img src={assets.history_icon} alt="" />
          {Extended ? <p>Activity</p> : null}
        </div>
        <div className="Bottom-items Recent-Entry">
          <img src={assets.setting_icon} alt="" />
          {Extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
