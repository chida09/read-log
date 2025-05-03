#!/bin/bash

# 開発環境の動作確認スクリプト

echo "🚀 BookShelf 開発環境の動作確認を開始します..."
echo ""

# 1. 必要なコマンドの確認
echo "1. 必要なコマンドの確認"
echo "------------------------"

# Node.jsの確認
if command -v node >/dev/null 2>&1; then
  echo "✅ Node.js: $(node -v)"
else
  echo "❌ Node.js が見つかりません"
  exit 1
fi

# npmの確認
if command -v npm >/dev/null 2>&1; then
  echo "✅ npm: $(npm -v)"
else
  echo "❌ npm が見つかりません"
  exit 1
fi

# gitの確認
if command -v git >/dev/null 2>&1; then
  echo "✅ Git: $(git --version | head -n 1)"
else
  echo "❌ Git が見つかりません"
  exit 1
fi

echo ""

# 2. 依存関係の確認
echo "2. 依存関係の確認"
echo "-----------------"

echo "📦 パッケージの依存関係を確認中..."
npm list --depth=0 || true

echo ""

# 3. 環境変数の確認
echo "3. 環境変数の確認"
echo "-----------------"

if [ -f .env ]; then
  echo "✅ .env ファイルが存在します"
else
  echo "❌ .env ファイルが見つかりません"
  echo "ℹ️  .env.example を参考に .env ファイルを作成してください"
fi

echo ""

# 4. Prismaのセットアップ確認
echo "4. Prismaのセットアップ確認"
echo "---------------------------"

echo "🗄️  Prismaスキーマの検証..."
npx prisma validate || true

echo ""

# 5. Next.jsの開発サーバー起動テスト
echo "5. Next.jsの開発サーバー起動テスト"
echo "----------------------------------"

echo "🌐 開発サーバーを起動します..."
echo "ℹ️  サーバーが正常に起動したら、ブラウザで http://localhost:3000 を開いてください"
echo "ℹ️  終了するには Ctrl+C を押してください"

npm run dev
