#!/bin/bash

# クイック動作確認スクリプト（開発サーバーを起動せずに環境をチェック）

echo "🔍 BookShelf 開発環境のクイックチェック..."
echo ""

# 1. 必要なコマンドの確認
echo "✓ コマンドの確認"
echo "---------------"
echo "Node.js: $(node -v)"
echo "npm: $(npm -v)"
echo "Git: $(git --version | head -n 1)"
echo ""

# 2. パッケージインストール状態の確認
echo "✓ パッケージの確認"
echo "-----------------"
if [ -d "node_modules" ] && [ -f "package-lock.json" ]; then
  echo "✅ npmパッケージはインストール済みです"
else
  echo "❌ npmパッケージがインストールされていません"
  echo "ℹ️  'npm install' を実行してください"
fi
echo ""

# 3. 環境変数の確認
echo "✓ 環境変数の確認"
echo "---------------"
if [ -f .env ]; then
  echo "✅ .env ファイルが存在します"
  echo "📄 設定されている環境変数:"
  # 値は表示せずキーのみ表示
  grep -v '^#' .env | grep '=' | cut -d '=' -f1 | awk '{print "  - " $1}'
else
  echo "❌ .env ファイルが見つかりません"
  if [ -f .env.example ]; then
    echo "ℹ️  .env.example が存在します。以下のコマンドでコピーできます:"
    echo "    cp .env.example .env"
  fi
fi
echo ""

# 4. Prismaの状態確認
echo "✓ Prismaの確認"
echo "--------------"
if [ -f "prisma/schema.prisma" ]; then
  echo "✅ Prismaスキーマファイルが存在します"
  
  if [ -d "node_modules/.prisma/client" ]; then
    echo "✅ PrismaクライアントはSUBIASHI生成済みです"
  else
    echo "❌ Prismaクライアントは生成されていません"
    echo "ℹ️  'npx prisma generate' を実行してください"
  fi
  
  if [ -f "prisma/dev.db" ] || [ -f "prisma/test.db" ]; then
    echo "✅ データベースファイルが存在します"
  else
    echo "⚠️  データベースファイルが見つかりません"
    echo "ℹ️  'npx prisma db push' を実行してください"
  fi
else
  echo "❌ Prismaスキーマファイルが見つかりません"
fi
echo ""

# 5. TypeScriptの型チェック
echo "✓ TypeScriptの確認"
echo "------------------"
echo "型チェックを実行中..."
npm run type-check || true
echo ""

# サマリー
echo "📋 サマリー"
echo "----------"
echo "開発環境のクイックチェックが完了しました。"
echo "問題がある場合は、上記のメッセージを確認してください。"
echo ""
echo "ℹ️  開発サーバーを起動するには: npm run dev"
echo "ℹ️  完全な環境チェックを行うには: ./scripts/verify-environment.sh"
