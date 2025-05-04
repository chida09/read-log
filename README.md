# 📚 Read Log

読書記録管理アプリケーション - Next.js 14 + TypeScript + Tailwind CSS で構築されたシンプルな読書管理システム

## 開発環境の確認

開発環境が正しくセットアップされているか確認するには、以下のコマンドを実行してください：

```bash
./scripts/verify-environment.sh
```

このスクリプトは以下の項目を確認します：
- 必要なコマンド（Node.js、npm、Git）のインストール状況
- npmパッケージの依存関係
- 環境変数ファイル（.env）の存在
- Prismaのセットアップ状況
- Next.js開発サーバーの起動テスト

## スタイリング

このプロジェクトではTailwind CSS v4を使用しています。詳細な設定については [TailwindCSSセットアップガイド](./docs/tailwind-setup.md) を参照してください。

### Tailwind CSSの動作確認

Tailwind CSSが正しく設定されているか確認するには：

```bash
npm run dev
```

ブラウザで [http://localhost:3333/tailwind-check](http://localhost:3333/tailwind-check) にアクセスしてください。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [https://localhost:3333](https://localhost:3333) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
