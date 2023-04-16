import type { AppProps } from 'next/app';

import 'normalize.css/normalize.css';

import { Amaranth, Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const amaranth = Amaranth({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          min-height: 100vh;
          padding: 0;
        }

        body {
          font-size: 12pt;
          font-family: ${openSans.style.fontFamily};
          font-weight: 400;
          color: #333;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${amaranth.style.fontFamily};
          font-weight: 700;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
