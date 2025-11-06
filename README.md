# 🃏 Poker Tournament Timer

ブラウザ上でポーカーのトーナメント進行を管理・表示できるアプリケーションです。  
主催者がブラインド構成を作成し、タイマーで進行を管理します。  
将来的にはプレイヤー登録・ミラー表示・リアルタイム同期などを実装予定です。

---

## 🚀 プロジェクト概要

**Poker Tournament Timer** は、店舗やホームゲームでのトーナメント運営を支援するための  
軽量でシンプルな Web アプリケーションです。

### 🧩 主な機能（予定）

| フェーズ | 機能概要 |
|-----------|-----------|
| **M2** | トーナメント設定画面（レベル追加・編集・保存） |
| **M3** | 進行画面（タイマー・次レベル表示・一時停止）→ **MVPゴール** |
| **M4+** | 永続化、プレイヤー管理、共有、ミラー画面などを順次実装予定 |

---

## 🧱 現在の進行状況

| フェーズ | 状態 | 内容 |
|-----------|------|------|
| M0 | ✅ 完了 | リポジトリ初期化・README・ROADMAP作成 |
| M1 | 🚧 進行中 | Vite + React + Tailwind の環境構築 |
| M2 以降 | ⏸ 未着手 | 各機能の実装予定 |

---

## 🚀 セットアップ手順

### 1. リポジトリをクローン
```bash
git clone https://github.com/Nico226213/poker_tornament_application.git
cd poker_tornament_application
```

### 2. 依存関係をインストール
```bash
npm install
```

### 3. 開発サーバーを起動
```bash
npm run dev
```

### 4. ブラウザでアクセス
開発サーバーが起動したら、以下のURLにアクセスしてください：
```
http://localhost:5173
```

---

## 🛠 使用技術

| 分類 | 技術 | 役割 |
|------|------|------|
| フロントエンド | React | UI構築 |
| ビルドツール | Vite | 高速な開発サーバー・ビルド |
| スタイリング | Tailwind CSS | ユーティリティベースのCSSフレームワーク |
| バージョン管理 | Git / GitHub | 開発履歴管理 |

---

## 📁 ディレクトリ構成

```
poker_tornament_application/
├── src/
│   ├── assets/        # 画像やアイコン
│   ├── components/    # Reactコンポーネント（今後追加予定）
│   ├── App.jsx        # アプリ全体のルートコンポーネント
│   ├── App.css        # アプリのスタイル
│   ├── main.jsx       # エントリーポイント
│   └── index.css      # グローバルスタイル
├── public/            # 静的ファイル
├── docs/
│   └── ROADMAP.md     # 開発ロードマップ
├── index.html         # HTMLテンプレート
├── package.json       # npm 設定ファイル
├── vite.config.js     # Vite 設定
└── eslint.config.js   # ESLint 設定
```

---

## 🧭 開発フロー

### ブランチ戦略
- メインブランチ: `main` / `develop`
- 新機能開発: `feature/<機能名>` ブランチで作業
- 完了後、`develop` にプルリクエストを作成

### 開発例
```bash
# 新機能ブランチを作成
git checkout -b feature/setup-base

# 作業後にコミット
git add .
git commit -m "feat: セットアップ完了"

# プッシュしてプルリクエスト作成
git push origin feature/setup-base
```