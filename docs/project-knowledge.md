## 基本方針
- 日本語で返信すること
- 不明点があったら質問すること

## プロジェクトルール
- ディレクトリは `cd $HOME/Dev/read-log` に移動してから作業すること
- リポジトリ所有者は chida09 である

## 開発の順序
1.APIの作成と立ち上げ（DBはモック）
2.クライアントの作成と立ち上げ（APIはモック）
3.両者の疎通
4.DBを作って疎通
5.デプロイ

## 機能開発の方針
- 各機能は上記の開発順序に従って、スモールステップで実装する
- 一度に多くの機能を実装せず、1機能ずつ完成させる
- 各ステップ（API、クライアント、疎通、DB、デプロイ）ごとにIssueを作成する
- 1つの機能の全ステップが完了してから、次の機能の開発に進む
- 推奨される機能の実装順序：
  1. ユーザー登録
  2. ユーザーログイン
  3. 本の一覧表示
  4. 本の追加
  5. 本の編集
  6. 本の削除

## 開発ルール
- Issue を確認してからコードを書くこと
  - Issueの各チェックボックス（タスク）に対して、1つのPRを作成すること
  - 対応するIssueが無ければ質問すること
- Barrel Export は禁止。直接インポートすること
- テストのファイルに `if` や `filter` などの動的な処理は書かないこと
- コロケーションを意識して、実装やテストは同じディレクトリ内に配置すること
- npm 実行時は必ず `|| true` でエラーを無視すること

## 開発フロー
1. Issueを確認し、対応するチェックボックス（タスク）を選択
2. mainブランチから作業ブランチを作成（ブランチ名はConventional Branchに従う）
3. タスクの実装を行う
4. コミット（Conventional Commitsに従う）
5. PRを作成（GitHub MCPサーバーを使用）
6. レビュー・修正
7. マージ後、作業ブランチを削除

## Issue作成のルール
- 1件のIssueに対して、チェックボックス形式でタスクリストを出すこと
- 実装を伴うタスクについては、実装とテストコードの作成をペアにすること（Issueを分けない）
- テストが不要なタスク（設定、ドキュメント等）がある場合は、その旨を明記すること

## PR作成のルール
- GitHub の MCP サーバーの create_pull_request を利用して PR を作ること
- PRのタイトルは日本語で書くこと
- PRの本文の中に関連するIssueを記載すること（例：`- #1`）
- PRは1つのチェックボックス（タスク）に対応すること
- 最後のタスクのPRには「Closes #n」を含めてIssueの自動クローズを設定すること

## ブランチ管理のルール
- 作業開始前に必ずmainブランチをcheckoutし、最新の状態にする (`git checkout main && git pull origin main`)
- mainブランチから新しいブランチを作成する (`git checkout -b feature/...`)
- ブランチ名はConventional Branchに従う
- 作業完了後、PRを作成する前にmainブランチの最新の変更を取り込む

## git branch の命名ルール
- Conventional Branch に従うこと
 - https://conventional-branch.github.io/

## git commit の命名ルール
- Conventional Commits に従うこと
  - https://www.conventionalcommits.org/en/v1.0.0/#summary
- メッセージは英語で書くこと
