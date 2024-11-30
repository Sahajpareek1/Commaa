import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="Main">
      <div className="Nav">
        <p>COMMA</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="Main-Container">
        {!showResult ? (
          <>
            <div className="Greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>

            <div className="Cards">
              <div className="Card">
                <p>Suggest Beautiful Places To See On An Upcoming Road Trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="Card">
                <p>Briefly Summarize This Concept :Urban Planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="Card">
                <p>Brainstorm Team Bonding Activities For Our Work Retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="Card">
                <p>Improve The Readability Of The Following Code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="Result-Title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="Main-Bottom">
          <div className="Searchbox">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text "
              placeholder=" Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => {
                    onSent();
                  }}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="Bottom-Info">
            Comma may display inaccurate info ,including about people, so double
            check its responses . your privacy and Comma apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
