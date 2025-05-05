# Contributing to Read Log

## 開発環境のセットアップ

### 必要な環境

- Node.js 20.x 以上
- npm 10.x 以上
- Git

### 初期セットアップ

1. リポジトリをクローン:

   ```bash
   git clone https://github.com/chida09/read-log.git
   cd read-log
   ```

2. 依存関係をインストール:

   ```bash
   npm install
   ```

3. 環境変数を設定:

   ```bash
   cp .env.example .env
   ```

4. データベースをセットアップ:
   ```bash
   npm run prisma:migrate
   npm run prisma:seed
   ```

## 開発ワークフロー

### ブランチ戦略

1. `main` ブランチから新しいブランチを作成
2. ブランチ名は [Conventional Branch](https://conventional-branch.github.io/) に従う
3. 作業完了後、Pull Request を作成

### コミットルール

1. コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/) に従う
2. コミット前に自動的に lint と type-check が実行される

### プレコミットフック

このプロジェクトでは Husky と lint-staged を使用して、コミット前に自動的にコード品質チェックを行います：

- **ESLint**: JavaScript/TypeScript のリント
- **Prettier**: コードフォーマット
- **TypeScript**: 型チェック

これらのチェックは、ステージングされたファイルに対してのみ実行されます。

#### 手動でのチェック実行

```bash
# ESLint
npm run lint

# TypeScript 型チェック
npm run type-check

# Prettier フォーマット
npx prettier --write .
```

#### プレコミットフックをスキップする場合

緊急時のみ、`--no-verify` フラグを使用してフックをスキップできます：

```bash
git commit -m "fix: emergency fix" --no-verify
```

**注意**: チームメンバーと相談の上、必要な場合のみ使用してください。

### プルリクエスト

1. 1つの PR は1つのタスク（Issue のチェックボックス）に対応
2. PR タイトルは日本語で記述
3. PR 本文には関連する Issue を記載（例：`- #1`）
4. 最後のタスクの PR には `Closes #n` を含める

## 開発コマンド

```bash
# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# テストの実行
npm run test

# リントの実行
npm run lint

# 型チェックの実行
npm run type-check

# Prisma Studio の起動
npm run prisma:studio
```

## コーディング規約

### TypeScript

- 型定義は明示的に行う
- `any` の使用は避ける
- インターフェースと型エイリアスを適切に使い分ける

### React コンポーネント

- 関数コンポーネントを使用
- Props の型定義は必須
- コンポーネントはコロケーションの原則に従って配置

### インポート

- Barrel Export は禁止
- 相対パスより絶対パスを優先
- 直接インポートを使用

### テスト

- テストファイルは実装と同じディレクトリに配置
- テストファイルに動的な処理（`if`、`filter` など）は書かない
- テストケースは明確で簡潔に記述

## 問題報告

Issue を作成する際は、以下の情報を含めてください：

1. 問題の詳細な説明
2. 再現手順
3. 期待される動作
4. 実際の動作
5. 環境情報（OS、ブラウザなど）

## 質問

開発に関する質問がある場合は、Issue を作成してください。
