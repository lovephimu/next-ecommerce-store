'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

// import CheckOutButton from './CheckOutButton';

type Props = {
  totalSum: number;
};
export default function CheckOutForm(props: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      email &&
      address &&
      city &&
      postalCode &&
      country &&
      creditCard &&
      expirationDate &&
      securityCode
    ) {
      setActiveButton(false);
    }
  }, [
    firstName,
    lastName,
    email,
    address,
    city,
    postalCode,
    country,
    creditCard,
    expirationDate,
    securityCode,
  ]);

  return (
    <main className="structureFlex">
      <form className="basicFlex">
        <section className="checkoutFlex justWidth">
          <section className="cartFlexItem cartListGrow bottomGap">
            <h3 className="bottomPaddingHalf">Shipping</h3>
            <section className="basicFlex basicFlexVertical bottomGapHalf">
              <div className="basicFlex">
                <label htmlFor="firstName" className="labelInput">
                  First name
                </label>
                <label htmlFor="lastName" className="labelInput">
                  Last name
                </label>
              </div>
              <div className="basicFlex bottomPaddingHalf">
                <input
                  id="firstName"
                  className="input"
                  value={firstName}
                  data-test-id="checkout-first-name"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFirstName(event.currentTarget.value);
                  }}
                />
                <input
                  id="lastName"
                  className="input"
                  value={lastName}
                  data-test-id="checkout-last-name"
                  onChange={(event) => {
                    setLastName(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="basicFlex">
                <label htmlFor="email" className="labelInput">
                  E-Mail
                </label>
              </div>
              <div className="basicFlex  bottomPaddingHalf">
                <input
                  id="email"
                  className="input"
                  value={email}
                  data-test-id="checkout-email"
                  onChange={(event) => {
                    setEmail(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="basicFlex">
                <label htmlFor="address" className="labelInput">
                  Address
                </label>
              </div>
              <div className="basicFlex  bottomPaddingHalf">
                <input
                  id="address"
                  className="input"
                  value={address}
                  data-test-id="checkout-address"
                  onChange={(event) => {
                    setAddress(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="basicFlex">
                <label className="labelInput" htmlFor="city">
                  City
                </label>
                <label className="labelInput" htmlFor="postalCode">
                  Postal code
                </label>
              </div>
              <div className="basicFlex bottomPaddingHalf">
                <input
                  id="city"
                  className="input"
                  value={city}
                  data-test-id="checkout-city"
                  onChange={(event) => {
                    setCity(event.currentTarget.value);
                  }}
                />
                <input
                  id="postalCode"
                  className="input"
                  value={postalCode}
                  data-test-id="checkout-postal-code"
                  onChange={(event) => {
                    setPostalCode(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="basicFlex">
                <label htmlFor="country" className="labelInput">
                  Country
                </label>
              </div>
              <div className="basicFlex bottomPaddingHalf">
                <input
                  id="country"
                  className="input"
                  value={country}
                  data-test-id="checkout-country"
                  onChange={(event) => {
                    setCountry(event.currentTarget.value);
                  }}
                />
              </div>
            </section>
            <h3 className="bottomPaddingHalf">Payment information</h3>
            <section className="bottomGapHalf">
              <div className="basicFlex">
                <label htmlFor="creditCard" className="labelInput">
                  Card Number
                </label>
              </div>
              <div className="basicFlex bottomPaddingHalf">
                <input
                  id="creditCard"
                  className="input cardNumberInput"
                  placeholder="xxxx xxxx xxxx xxxx"
                  value={creditCard}
                  data-test-id="checkout-credit-card"
                  onChange={(event) => {
                    setCreditCard(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="basicFlex">
                <label htmlFor="expirationDate" className="labelInput">
                  Expiration Date
                </label>
                <label htmlFor="securityCode" className="labelInput">
                  Security Code
                </label>
              </div>
              <div className="basicFlex bottomPaddingHalf">
                <input
                  id="expirationDate"
                  placeholder="MM/YY"
                  className="input"
                  value={expirationDate}
                  data-test-id="checkout-expiration-date"
                  onChange={(event) => {
                    setExpirationDate(event.currentTarget.value);
                  }}
                />
                <input
                  id="securityCode"
                  placeholder="123"
                  className="input"
                  value={securityCode}
                  data-test-id="checkout-security-code"
                  onChange={(event) => {
                    setSecurityCode(event.currentTarget.value);
                  }}
                />
              </div>
            </section>
          </section>
          <section className="cartFlexItem cartProgressBorder cartFlexPadding  bottomGap">
            <div className="basicFlex basicFlexVertical basicFlexAlignTop bottomGapHalf ">
              <h3 className="bottomGapHalf">Order total:</h3>
              <p className="pTitle boldParagraph bottomGap">
                {props.totalSum}€
              </p>
              <p className="bottomPaddingHalf">You can do it! </p>
              <p className="subTitle">One step remaining:</p>
              <div className="basicFlex basicFlexAlignBottom cartBoxHeight cartSpaceBetween">
                <div className="contentFlex basicFlexAlignEnd">
                  <p>▲</p>
                  <p>Choice</p>
                </div>
                <div className="contentFlex basicFlexAlignEnd">
                  <p>▲</p>
                  <p>Checkout</p>
                </div>
                <div className="contentFlex basicFlexAlignEnd">
                  <p>△</p>
                  <p>Confirmation</p>
                </div>
              </div>
              <div className="basicFlex cartSpaceBetween bottomGap">
                <div className="halfFlex" />
                <div className="halfFlexDark" />
              </div>
              <section className="basicFlex">
                <button
                  type="button"
                  data-test-id="checkout-confirm-order"
                  disabled={activeButton}
                  className="basicFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton cartOut"
                  onClick={() => {
                    router.push('/cart/checkout/thankyou');
                    router.refresh();
                  }}
                >
                  Confirm order
                </button>
              </section>
            </div>
          </section>
        </section>
      </form>
    </main>
  );
}
