import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <h1 className="logo">Because notent... </h1>
      <h2>...is not really what you want.</h2>
      <section className="landingSection landingYesHoney">
        <h2>Tent 1</h2>
      </section>
      <section className="landingSection landingYassQueen">
        <h2>Tent 2</h2>
      </section>
      <section className="landingSection landingYarModular">
        <h2>Tent 3</h2>
      </section>
    </>
  );
}
