import "./globals.css";
import Header from "./Header";
import Main from "./Main";

export const metadata = {
  title: "ロリスとのおしゃべりタイム- 心地よいぬいぐるみとの時間🐒",
  description:
    "ChatGPT APIを使ったチャットアプリです。ロリスと一緒におしゃべりが出来ます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="min-h-screen bg-white md:bg-gray-100">
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
