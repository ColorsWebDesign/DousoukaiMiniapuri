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
      <p>登録年月日 2025/10/10</p>
      <p>未認証</p>
      {name && <p>こんにちは、{name}さん</p>}
      <p>同窓会ミニアプリテスト版です</p>

      <div class="nav">
        <div class="clm03">
          <img src="../img/nav001.jpg" alt="" />
          <img src="../img/nav001.jpg" alt="" />
          <img src="../img/nav001.jpg" alt="" />
          <img src="../img/nav001.jpg" alt="" />
          <img src="../img/nav001.jpg" alt="" />
          <img src="../img/nav001.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
