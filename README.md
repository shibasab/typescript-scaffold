# typescript-scaffold

TypeScript (ESM) + Node.js 24 + pnpm を前提にした、再利用可能な Repository Scaffold です。

## テンプレートの使い方

### 方法1: GitHubの「Use this template」を使う（推奨）

1. GitHub上でこのリポジトリを開き、`Use this template` をクリックする。
2. 新しいリポジトリ名と公開設定（Public/Private）を選び、作成する。
3. 作成したリポジトリをローカルに clone する。
4. 初期セットアップを実行する。

```bash
npm install -g pnpm
pnpm install
pnpm prepare
```

5. `package.json` の `name` / `description` などを新規プロジェクト用に更新する。
6. 品質チェックを実行して初期状態が正常なことを確認する。

```bash
pnpm verify
```

7. 初回コミットを作成して開発を開始する。

### 方法2: GitHub CLIでテンプレートから作成する

```bash
gh repo create <new-repo-name> --template <owner>/typescript-scaffold --private --clone
cd <new-repo-name>
npm install -g pnpm
pnpm install
pnpm prepare
pnpm verify
```

## Requirements

- Node.js 24+
- npm 10+
- pnpm 10+

- 参考リンク: [Node.js公式サイト](https://nodejs.org/)

## Scripts

- `pnpm dev`: tsx で開発実行（watch）
- `pnpm build`: `dist` へビルド
- `pnpm start`: ビルド済みアプリ実行
- `pnpm test`: テスト実行
- `pnpm test:watch`: テストwatch実行
- `pnpm lint`: ESLint実行
- `pnpm lint:fix`: ESLint自動修正
- `pnpm format`: oxfmtで整形
- `pnpm format:check`: oxfmt整形チェック
- `pnpm typecheck`: 型チェック
- `pnpm verify`: CI相当の統合チェック

## Git hooks

`pre-commit` で以下を実行します。

1. `pnpm lint-staged`（staged ファイルを oxfmt で自動整形して再ステージ）
2. `pnpm lint`
3. `pnpm test`
4. `pnpm typecheck`

## CI

GitHub Actions で Node.js 24 の品質チェック（format / lint / test / typecheck / build）を実行します。
