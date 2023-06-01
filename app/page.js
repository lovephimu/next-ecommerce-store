import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className="structureFlex bottomGap">
      <section className="basicFlex basicFlexVertical cartPaddingGlobal">
        <h1 className="logo">Because notent... </h1>
        <h2>...is not really what you want.</h2>
        <section className="landingSection landingYesHoney bottomGapHalf">
          <h2>Tent 1</h2>
        </section>
        <section className="landingSection landingYesHoney landingYesChillax bottomGapHalf">
          <h2>Tent 2</h2>
        </section>
        <section className="landingSection landingYesHoney landingYesRave bottomGapHalf">
          <h2>Tent 3</h2>
        </section>
      </section>
    </main>
  );
}
