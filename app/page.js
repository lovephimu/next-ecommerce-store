import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="structureFlex bottomGap">
      <section className="basicFlex basicFlexVertical cartPaddingGlobal">
        {/* <h1 className="logo bottomGap">yesTent = noBoundaries</h1> */}
        <section className="landingSection landingYesHoney bottomGapHalf">
          <div className="positionTitle">
            <h1 className="landingTitle">yesHoney ♡</h1>
            <p className="pTitle">Just you, your partner and Mother Nature</p>
            <p>(...or mother bear 🐻)</p>
            <Link href="/products/1">learn more...</Link>
          </div>
        </section>
        <section className="landingSection landingYesHoney landingYesChillax bottomGapHalf">
          <div className="positionTitle">
            <h1 className="landingTitle">yesChillax</h1>
            <p className="pTitle">
              The House you always wanted but with yesTent™ fabric for walls!
            </p>
            <p>(load-bearing walls are overrated anyway)</p>
            <Link href="/products/2">learn more...</Link>
          </div>
        </section>
        <section className="landingSection landingYesHoney landingYesRave bottomGapHalf">
          <div className="positionTitle">
            <h1 className="landingTitle">yesRave</h1>
            <p className="pTitle">
              Mobility, friends and party - all in one tent.
            </p>
            <p>(DJ not included)</p>
            <Link href="/products/3">learn more...</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
