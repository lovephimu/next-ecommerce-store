import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="structureFlex bottomGap">
      <section className="basicFlex basicFlexVertical cartPaddingGlobal">
        {/* <h1 className="logo bottomGap">yesTent = noBoundaries</h1> */}
        <section className="landingSection landingYesHoney">
          <div className="positionTitle">
            <h1 className="landingTitle">yesHoney ♡</h1>
            <p className="pTitle">Just you, your partner and Mother Nature</p>
            <p className="pSubTitle">(...or mother bear 🐻)</p>
            <Link href="/products/1" className="pSubTitle">
              learn more...
            </Link>
          </div>
        </section>
        <section className="landingSection landingYesHoney landingYesChillax">
          <div className="positionTitle">
            <h1 className="landingTitle">yesChillax</h1>
            <p className="pTitle">
              The House you always wanted - with yesTent™ fabric for walls!
            </p>
            <p className="pSubTitle">
              (load-bearing walls are overrated anyway)
            </p>
            <Link href="/products/2" className="pSubTitle">
              learn more...
            </Link>
          </div>
        </section>
        <section className="landingSection landingYesHoney landingYesRave ">
          <div className="positionTitle">
            <h1 className="landingTitle">yesRave</h1>
            <p className="pTitle">
              Mobility, friends and party - all in one tent.
            </p>
            <p className="pSubTitle">(DJ not included)</p>
            <Link href="/products/3" className="pSubTitle">
              learn more...
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
