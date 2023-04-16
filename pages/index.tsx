import Head from 'next/head';
import { Russo_One } from 'next/font/google';

const russoOne = Russo_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Douglas Bouttell</title>
      </Head>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;

          background: #7f00ff;
          background: linear-gradient(to top, #33003a, #7f00ff);

          height: 100%;
        }

        .container p {
          text-align: center;
          margin: 0.25rem;
          padding: 0.25rem;
        }

        h1 {
          -webkit-text-stroke: 2px black;
          text-shadow: 4px 4px 0px black;
          color: white;
          font-size: 6rem;
          margin: 0;
          text-align: center;
        }

        p {
          -webkit-text-stroke: 1px black;
          font-weight: 700;
          font-size: 2rem;
          color: white;
        }
      `}</style>
      <div className="container">
        <div>
          <main style={{ position: 'relative' }}>
            <h1 className={russoOne.className}>Douglas Bouttell</h1>
            <p>Software Engineer, Sci-fi Nerd, Tech Fan, Foodie</p>
          </main>
        </div>
      </div>
    </>
  );
}
