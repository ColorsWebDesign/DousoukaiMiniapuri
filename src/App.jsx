import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        liff.getProfile()
          .then((profile) => {
            setName(profile.displayName);
          })
      })
  }, []);
  
  return (
    <div className="App">
      {name && <p>こんにちは、{name}さん</p>}
      <p>同窓会ミニアプリテスト版です</p>

      <div class="clm02">
      <div>aaaaaaa</div>
      <div>bbbbbbb</div>
      </div>
    </div>
  );
}

export default App;
