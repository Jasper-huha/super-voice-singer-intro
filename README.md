# 《決戰超強音》網站

華人音樂職業賽事聯盟《決戰超強音》面向陌生開發歌手的第一階段介紹網站。

## 網站內容

- 音樂職業賽事聯盟與《決戰超強音》的核心概念
- 四支固定戰隊、完整賽季與觀眾共同評分
- 歌手的作品、曝光、巡演及產業合作發展
- 一軍、二軍、三軍的長期發展道路
- 第一季合作邀請
- 天合國際娛樂與發起人／總製作人連書賢簡介

## 本機執行

需求：Node.js 22.13 或更新版本。

```bash
npm ci
npm run dev
```

正式建置與啟動：

```bash
npm run build
npm run start
```

應用程式會讀取部署環境提供的 `PORT`。

## Zeabur 部署

專案已包含：

- `Dockerfile`
- `.dockerignore`
- `zbpack.json`
- `package.json` 中的 `build` 與 `start` 指令

可選擇以下任一方式部署：

1. 在 Zeabur CLI 登入後，於專案根目錄執行 `npx zeabur@latest deploy`。
2. 將本資料夾推送至 GitHub，再於 Zeabur 選擇「Deploy your source code」並匯入該儲存庫。

## 主要檔案

- `app/page.tsx`：網站正文與結構
- `app/globals.css`：視覺設計與響應式版面
- `app/layout.tsx`：網站標題、說明及社群分享資訊
- `public/images/`：網站使用的視覺素材

## 後續編修原則

- 先確認正式文案，再修改網站。
- 標題應傳達產業價值、歌手發展與未來想像，避免使用口語化的說明句。
- 以正面方式說明《決戰超強音》是什麼、能創造什麼，避免反覆使用「不只是什麼」的句型。
- 天合國際與連書賢簡介維持在網站最後的補充說明區。
