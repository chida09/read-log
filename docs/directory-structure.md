bookshelf/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── books/
│   │   │   ├── page.tsx          # 本の一覧
│   │   │   ├── new/
│   │   │   │   └── page.tsx      # 本の追加
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx  # 本の編集
│   │   └── layout.tsx
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── layout.tsx
│   └── page.tsx                  # ホームページ/リダイレクト
├── components/
│   ├── ui/                       # shadcn/uiコンポーネント
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   └── ...
│   ├── auth/
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── books/
│   │   ├── book-card.tsx
│   │   ├── book-form.tsx
│   │   └── book-list.tsx
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   ├── auth.ts                   # NextAuth設定
│   ├── prisma.ts                 # Prismaクライアント
│   ├── validations/
│   │   ├── auth.ts               # 認証用バリデーション
│   │   └── book.ts               # 本用バリデーション
│   └── utils.ts                  # ユーティリティ関数
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   └── images/
│       └── book-placeholder.png  # デフォルト本画像
├── styles/
│   └── globals.css              # Tailwind CSS
├── types/
│   └── index.ts                 # 型定義
├── .env
├── .env.example
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json


Next.js 14 (App Router)を使ったMVP版のディレクトリ構成を提案します：

### ディレクトリ構成

```
bookshelf/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── books/
│   │   │   ├── page.tsx          # 本の一覧
│   │   │   ├── new/
│   │   │   │   └── page.tsx      # 本の追加
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx  # 本の編集
│   │   └── layout.tsx
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── layout.tsx
│   └── page.tsx                  # ホームページ/リダイレクト
├── components/
│   ├── ui/                       # shadcn/uiコンポーネント
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   └── ...
│   ├── auth/
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── books/
│   │   ├── book-card.tsx
│   │   ├── book-form.tsx
│   │   └── book-list.tsx
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   ├── auth.ts                   # NextAuth設定
│   ├── prisma.ts                 # Prismaクライアント
│   ├── validations/
│   │   ├── auth.ts               # 認証用バリデーション
│   │   └── book.ts               # 本用バリデーション
│   └── utils.ts                  # ユーティリティ関数
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   └── images/
│       └── book-placeholder.png  # デフォルト本画像
├── styles/
│   └── globals.css              # Tailwind CSS
├── types/
│   └── index.ts                 # 型定義
├── .env
├── .env.example
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### ポイント

1. **App Router構造**
   - `(auth)`と`(dashboard)`でルートグループ化
   - 認証済み/未認証でレイアウトを分離

2. **コンポーネント整理**
   - 機能ごとにフォルダ分け
   - UIコンポーネントはshadcn/ui

3. **lib/フォルダ**
   - 共通ロジックを集約
   - バリデーションスキーマを分離

4. **型安全性**
   - TypeScriptで型定義
   - Prismaで自動生成される型を活用
