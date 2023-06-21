# YouTube_API_Insert_Playlist
YouTube Data API v3でプレイリストを作るサンプル。Node.js版。

# Setup
- Node.jsのインストール（16/18で動作確認済み）
- `npm install`
- OAuth2.0クライアントIDを作成する
  - Google Cloud Platformでプロジェクト作成
  - 「認証情報」にてクライアント作成
  - リダイレクト先に`http://localhost:3000/oauth2callback`を指定すること。
- 認証情報のJSONをダウンロード。`oauth2.keys.json`として`secrets/`に置く。
