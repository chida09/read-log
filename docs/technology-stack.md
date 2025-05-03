#### フロントエンド
- **Next.js 14** (App Router)
  - TypeScriptを使用
  - Server ActionsでAPIエンドポイントを簡略化
- **TailwindCSS** - スタイリング
- **shadcn/ui** - UIコンポーネントライブラリ
- **React Hook Form** - フォーム管理
- **Zod** - バリデーション

#### バックエンド
- **Next.js API Routes** (または Server Actions)
- **NextAuth.js (Auth.js)** - 認証
  - Credentials Provider（メール/パスワード）
  - bcrypt - パスワードハッシュ化

#### データベース
- **開発環境**: SQLite（簡単にセットアップ可能）
- **本番環境**: PostgreSQL（Supabaseなど）
- **Prisma** - ORM
  - マイグレーション管理
  - 型安全なクエリ

#### 画像管理
- **画像URL保存** - データベースに文字列として保存
- **Next.js Image Component** - 画像の最適化表示
- **デフォルト画像** - public/フォルダに配置

#### 開発ツール
- **ESLint** - コード品質管理
- **Prettier** - コードフォーマット
- **Git** - バージョン管理

#### デプロイ
- **Vercel** - フロントエンド/バックエンドホスティング
- **Supabase** または **PlanetScale** - データベースホスティング
