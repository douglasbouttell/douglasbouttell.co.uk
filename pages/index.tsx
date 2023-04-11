import Image from 'next/image';
import css from '~/styles/index.module.css';
import title from '~/img/title.svg';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div>
        <main>
          <p>
            <Image src={title} alt="Douglas Bouttell" />
          </p>
          <p>
            Software Engineer <span role="presentation">|</span> Sci-fi Nerd{' '}
            <span role="presentation">|</span> Tech Fan{' '}
            <span role="presentation">|</span> Foodie
          </p>
        </main>
      </div>
    </div>
  );
}
