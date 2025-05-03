## 基本方針
- 日本語で返信すること
- 不明点があったら質問すること

## プロジェクトルール
- ディレクトリは `cd $HOME/Dev/read-log` に移動してから作業すること

## 開発の順序
1.APIの作成と立ち上げ（DBはモック）
2.クライアントの作成と立ち上げ（APIはモック）
3.両者の疎通
4.DBを作って疎通
5.デプロイ

## 開発ルール
- Issue を確認してからコードを書くこと
  - Issueは必ずタスクリスト1つに対して、PR1件の粒度で作業をすること
  - 対応するIssueが無ければ質問すること
- Barrel Export は禁止。直接インポートすること
- テストのファイルに `if` や `filter` などの動的な処理は書かないこと
- npm 実行時は必ず `|| true` でエラーを無視すること

## Issue作成のルール
- 1件のIssueに対して、チェックボックス形式でタスクリストを出すこと
- 実装とテストコードの作成は、ペアにすること（Issueを分けない）
- テストが不要なタスクがある場合は、その旨を明記すること
- チェックボックス形式のタスクリストが全てにチェックが付いたら、Issueをcloseすること

## PR作成のルール
- PRのタイトルは日本語で書くこと
- PRの本文の中に関連するIssueを記載すること

## git branch のルール
- Conventional Branch に従うこと
 - https://conventional-branch.github.io/

## git commit のルール
- Conventional Commits に従うこと
  - https://www.conventionalcommits.org/en/v1.0.0/#summary
- メッセージは英語で書くこと

## PR の作成
- GitHub の MCP サーバーの create_pull_request を利用して PR を作ること

