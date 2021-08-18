import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "Winking Face",
  "😌": "Relieved Face",
  "😍": "Smiling Face With Heart-Eyes",
  "🤪": "Crazy Face",
  "🤩": "Smirking Face With Starry Eyes",
  "😒": "Unamused Face",
  "😕": "Confused Face",
  "🤔": "Thinking Face",
  "😈": "Smiling Face With Horns",
  "❤": "Love",
  "😂": "Laughing"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmsg] = useState("");

  function emojiListener(event) {
    var emoji = event.target.value;

    var meaning = emojiDictionary[emoji];

    if (meaning === undefined) {
      meaning = "Opps! We don't have this in our database.";
    }

    setmsg(meaning);
  }
  function showemojiClickHandler(showemoji) {
    var meaning = emojiDictionary[showemoji];
    setmsg(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outtt</h1>
      <input onChange={emojiListener} placeholder="Enter emoji"></input>
      <p></p>
      <div> {meaning} </div>
      <div>
        <h3>Emojis we know</h3>
        {emojis.map(function (showemoji) {
          return (
            <span
              key={showemoji}
              onClick={() => showemojiClickHandler(showemoji)}
              styles={{ padding: "0.5rem", cursor: "pointer" }}
            >
              {showemoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
