# Tuna_Web

## GitHub Pages

`main`への push で GitHub Pages に自動デプロイします。初回のみ、リポジトリの
**Settings > Pages > Build and deployment** で **GitHub Actions** を選択してください。

公開先: <https://8n09nozn.github.io/Tuna_Web/>

ビルドには Live2D Cubism Framework のソースが必要です。`vite.config.mts` が参照する
`../../../Framework/src` をビルド環境から利用できる状態にしてください。