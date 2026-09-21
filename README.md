# Reach Institute Thinktank 公式Webサイト

Reach Institute Thinktank（学生団体）の公式Webサイトです。
Next.js、TypeScript、Tailwind CSS、App Router、ESLintを使用します。

## 起動方法

Node.jsをインストールしたうえで、プロジェクトのルートディレクトリから実行します。

```bash
npm install
npm run dev
```

ブラウザで <http://localhost:3000> を開いてください。

## 編集方法

ページは `src/app` 配下で編集します。トップページは `src/app/page.tsx`、プライバシーポリシーは `src/app/privacy-policy/page.tsx`、共通CSSは `src/app/globals.css` です。固定ヘッダーは `src/components/site-header.tsx` にあります。

開発サーバー起動中は、ファイルを保存するとブラウザに変更が反映されます。

## ビルド方法

本番用にビルドする場合は、次のコマンドを実行します。

```bash
npm run build
npm run start
```

コードの静的チェックは次のコマンドで実行できます。

```bash
npm run lint
```

## 情報の差し替え

- 団体名、Instagram URL、GoogleフォームURLは `src/data/siteConfig.ts` で管理しています。`contactFormUrl` は実際のGoogleフォームURLに置き換えてください。
- メンバー2名の役職、氏名、学年、コメントは `src/data/members.ts` で差し替えてください。写真は `public/images/` に配置し、同ファイルの `imagePath` と対応させます。
- ニュース・活動報告は `src/data/news.ts` で差し替えてください。
- プライバシーポリシーは、実際のGoogleフォームの取得項目や運用に合わせて、公開前に内容を見直してください。

## Git管理

`.gitignore` で `node_modules`、`.next`、環境変数ファイル、証明書や鍵などの秘密情報をGit管理から除外しています。
