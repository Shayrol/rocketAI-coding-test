import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex justify-center items-center font-[GapyeongHanseokbongBigBrush]">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
