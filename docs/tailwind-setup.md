# TailwindCSS セットアップガイド

## 設定ファイル

このプロジェクトでは、TailwindCSS v4がセットアップされています。

### 主な設定ファイル

- `tailwind.config.ts`: Tailwindの設定ファイル
- `postcss.config.mjs`: PostCSSの設定ファイル
- `src/styles/globals.css`: グローバルスタイルとTailwindディレクティブ

## カラーシステム

shadcn/uiと互換性のあるカラーシステムが設定されています：

### 主要な色
- **Primary**: プライマリボタンや重要なアクションに使用
- **Secondary**: セカンダリボタンや補助的な要素に使用
- **Muted**: サブテキストや補助的な情報に使用
- **Accent**: アクセントカラーとして強調に使用
- **Destructive**: 削除や危険なアクションに使用

### カラーバリエーション
各色には以下のバリエーションがあります：
- `DEFAULT`: 基本色
- `foreground`: テキスト色

## 動作確認

Tailwindの設定が正しく動作しているか確認するには、開発サーバーを起動して以下のページにアクセスしてください：

```bash
npm run dev
```

http://localhost:3333/tailwind-check

このページでは以下の項目が確認できます：
- カラーシステムの動作
- タイポグラフィスケール
- ボーダー半径の設定
- アニメーションの動作

## よく使うユーティリティクラス

### スペーシング
- `p-4`: padding: 1rem
- `m-4`: margin: 1rem
- `space-y-4`: 子要素間の垂直スペース: 1rem

### レイアウト
- `flex`: flexbox
- `grid`: CSS Grid
- `container`: 中央寄せコンテナ

### レスポンシブデザイン
- `sm:`: 640px以上
- `md:`: 768px以上
- `lg:`: 1024px以上
- `xl:`: 1280px以上
- `2xl:`: 1536px以上

## カスタマイズ

Tailwindの設定をカスタマイズする場合は、`tailwind.config.ts`を編集してください。

```typescript
theme: {
  extend: {
    colors: {
      // カスタムカラーを追加
      'brand-blue': '#1234FF',
    },
  },
},
```

## 注意事項

- CSS変数を使用しているため、明るいテーマと暗いテーマの切り替えが可能です
- `tailwindcss-animate`プラグインが含まれているため、アニメーションユーティリティが使用できます
- shadcn/uiのコンポーネントと互換性があるように設定されています
