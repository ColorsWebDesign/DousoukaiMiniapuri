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
      <p>登録年月日 2025/10/10<br>
      認証済み</p>
      {name && <p>こんにちは<br>
        <span>{name}</span>さん</p>}
      <p>同窓会ミニアプリテスト版です</p>

      <div class="nav">
        <div class="clm02">
          <div>お知らせ</div>
          <div>プロフィール登録</div>
          <div>同窓会</div>
          <div>お問い合わせ</div>
        </div>
       </div>
    </div>
  );
}

export default App;
