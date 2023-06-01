import Image from 'next/image';

export const metadata = {
  title: 'Thank you for your order',
  description: 'yesTent loves you',
};

export default function ThankYouPage() {
  return (
    <main className="structureFlex">
      <section className="basicFlex basicFlexVertical cartPaddingGlobal alignCenter">
        <div className="basicFlex basicGap bottomGap basicFlexAlignCenter">
          <h1>Thank you for your order</h1>
          <span className="topPadding">❤</span>
        </div>
        <div>
          <Image
            alt="Picture of a pretty tree"
            src="/images/plant_tree.png"
            height={300}
            width={300}
          />
          <h2 className="bottomPaddingHalf">
            For every sold tent we plant a tree!
          </h2>
          <p className="flowText">
            With your new yesTent, you're making a positive impact on our
            planet. We believe in sustainability, and that's why we plant a tree
            for each tent sold. With your support, we're working towards a
            greener future, one tent at a time. Thank you for being a part of
            our mission to make the Earth a better, more sustainable place.
            Together, we can create a brighter and healthier world for
            generations to come.
          </p>
        </div>
      </section>
    </main>
  );
}
