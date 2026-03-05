# typescript-scaffold

TypeScript (ESM) + Node.js 24 + pnpm を前提にした、再利用可能な Repository Scaffold です。

## テンプレートの使い方

### 方法1: GitHubの「Use this template」を使う（推奨）

1. GitHub上でこのリポジトリを開き、`Use this template` をクリックする。
2. 新しいリポジトリ名と公開設定（Public/Private）を選び、作成する。
3. 作成したリポジトリをローカルに clone する。
4. 初期セットアップを実行する。

```bash
corepack enable
corepack pnpm install
corepack pnpm prepare
```

5. `package.json` の `name` / `description` などを新規プロジェクト用に更新する。
6. 品質チェックを実行して初期状態が正常なことを確認する。

```bash
corepack pnpm verify
```

7. 初回コミットを作成して開発を開始する。

### 方法2: GitHub CLIでテンプレートから作成する

```bash
gh repo create <new-repo-name> --template <owner>/typescript-scaffold --private --clone
cd <new-repo-name>
corepack enable
corepack pnpm install
corepack pnpm prepare
corepack pnpm verify
```

## Requirements

- Node.js 24+
- Corepack enabled (`corepack enable`)

## Scripts

- `corepack pnpm dev`: tsx で開発実行（watch）
- `corepack pnpm build`: `dist` へビルド
- `corepack pnpm start`: ビルド済みアプリ実行
- `corepack pnpm test`: テスト実行
- `corepack pnpm test:watch`: テストwatch実行
- `corepack pnpm lint`: ESLint実行
- `corepack pnpm lint:fix`: ESLint自動修正
- `corepack pnpm format`: oxfmtで整形
- `corepack pnpm format:check`: oxfmt整形チェック
- `corepack pnpm typecheck`: 型チェック
- `corepack pnpm verify`: CI相当の統合チェック

## Git hooks

`pre-commit` で以下を実行します。

1. `corepack pnpm lint-staged`（staged TS/JS を oxfmt で自動整形）
2. `corepack pnpm lint`
3. `corepack pnpm test`
4. `corepack pnpm typecheck`

## CI

GitHub Actions で Node.js 24 の `corepack pnpm verify` を実行します。
