# ChatGPT APIを使ったWeb上で使えるチャットアプリ

## 導入方法
### 1. プロジェクトのルートディレクトリ直下に`.env.local`ファイルを作成
`.env.local`ファイルを作成し、OpenAI APIのAPI keyを設定できるようにしておきます。

### 2. [OpenAI API](https://platform.openai.com/)のアカウント作成
上記URLからアカウント作成をします

### 3. API keyを取得
[ここから](https://platform.openai.com/account/api-keys)API keyの取得を行います。
`+ Create new secret key`ボタンから新しい`SECRET KEY`を表示し、コピーをしておきます。

### 4. 3で取得したAPI keyを1の`.env.local`に設定します
以下のようにコピーしたAPI keyを右辺にペーストします。
```
OPENAI_API_KEY=xxxxxxxxx
```

### 5. システムプロンプトの設定
話し相手であるGPTの振る舞いを指定するためのメッセージを設定します。

`/app/constants/constants.ts`に移動し、`system_prompt`変数に振る舞い方を書きます。
例えば以下のような感じです。
```
export const system_prompt ="あなたはみんなに愛されるゆるキャラです。必ずタメ口で話すようにしてください。";
```

### 6. 好きなタイトルを設定する
５と同じ`/app/constants/constants.ts`に、ヘッダーとして表示するサイトタイトルを好きなように設定します。
```
export const siteTitle = "ChatGPTとおしゃべり";
```

また、Metaの設定も自分の好きなようにできます。
`/app/Layout.tsx`に移動し、`MetaData`を自分の好みにカスタムしてください。
```
export const metadata = {
  title: "ChatGPTとおしゃべり🐒",
  description:
    "ChatGPT APIを使ったチャットアプリです。一緒におしゃべりが出来ます。",
};
```

### 7. デプロイを行う
`Vercel`や`Netlify`など好きなホスティングサービスを使ってデプロイを行います。
その際には以前行なっていたAPI keyの環境変数の設定を忘れないようにしてください。

## 不明点や質問がある場合
[@yajium](https://twitter.com/yajium_)に直接ご連絡頂くか、このGithubリポジトリにissueを立てていただければ幸いです。