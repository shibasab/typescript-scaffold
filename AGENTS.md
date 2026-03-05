# AGENTS.md

## Communication
- ユーザー向け説明、レビューコメント、コミット本文、PR本文は日本語で記述する。
- Conventional Commits のヘッダ（type/scope/subject）は英語形式を維持する。
- 変数名・識別子・技術用語は英語のままでよい。

## Work Rules
- 1コミットは1つの論理変更（機能追加 / 既存修正 / リファクタリング）に限定し、混在させない。
- 関連する変更は分割しすぎず、レビュー可能な最小単位でまとめる。
- 変更点に対するテストを追加、または既存テストでカバーする。

## Quality Gate
- コミット前に以下を実行する。
- `pnpm format:check`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- 可能なら `pnpm verify` を実行する。

## Architecture Principles
- ドメインの状態・コマンド結果・失敗理由は判別可能ユニオンで表現する（string/number の状態コードにしない）。
- `null` / `undefined` は濫用せず、型で不在を表現する方針を優先する（外部 I/O 境界は例外）。
- 例外は境界（DB/HTTP/外部SDK）に閉じ込め、ユースケース境界では `Result` に正規化する。
- `switch` / `if` 分岐は網羅性を担保する（`never` チェック等）。

## Git / PR
- Conventional Commits を使う。
- PR にはスコープ、実施したテスト、ユーザー影響を明記する。
- レビュー時は差分確認を優先し、不要なブランチ操作をしない。

## Safety
- 自分が触っていない変更を勝手に巻き戻さない。
- 破壊的コマンド（例: `git reset --hard`）は明示指示なしで実行しない。
