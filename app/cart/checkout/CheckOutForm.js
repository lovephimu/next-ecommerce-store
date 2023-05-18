'use client';

import { useState } from 'react';

export default function CheckOutForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country, setCountry] = useState();
  const [creditCard, setCreditCard] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [securityCode, setSecurityCode] = useState();

  return (
    <>
      <h1>Check Out For Real</h1>
      <form>
        <p>Shipping</p>
        <section>
          <div>
            <label htmlFor="firstName">First name</label>
            <label htmlFor="lastName">Last name</label>
          </div>
          <div>
            <input
              id="firstName"
              value={firstName}
              data-test-id="checkout-first-name"
              onChange={(event) => {
                setFirstName(event.currentTarget.value);
              }}
            />
            <input
              id="lastName"
              value={lastName}
              data-test-id="checkout-last-name"
              onChange={(event) => {
                setLastName(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
          </div>
          <div>
            <input
              id="email"
              value={email}
              data-test-id="checkout-email"
              onChange={(event) => {
                setEmail(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <div>
            <input
              id="address"
              value={address}
              data-test-id="checkout-address"
              onChange={(event) => {
                setAddress(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <label htmlFor="postalCode">Postal code</label>
          </div>
          <div>
            <input
              id="city"
              value={city}
              data-test-id="checkout-city"
              onChange={(event) => {
                setCity(event.currentTarget.value);
              }}
            />
            <input
              id="postalCode"
              value={postalCode}
              data-test-id="checkout-postal-code"
              onChange={(event) => {
                setPostalCode(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
          </div>
          <div>
            <input
              id="country"
              value={country}
              data-test-id="checkout-country"
              onChange={(event) => {
                setCountry(event.currentTarget.value);
              }}
            />
          </div>
        </section>
        <p>Payment information</p>
        <section>
          <div>
            <label htmlFor="creditCard">Card Number</label>
          </div>
          <div>
            <input
              id="creditCard"
              value={creditCard}
              data-test-id="checkout-credit-card"
              onChange={(event) => {
                setCreditCard(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="expirationDate">Expiration Date</label>
            <label htmlFor="securityCode">Security Code</label>
          </div>
          <div>
            <input
              id="expirationDate"
              value={expirationDate}
              data-test-id="checkout-expiration-date"
              onChange={(event) => {
                setExpirationDate(event.currentTarget.value);
              }}
            />
            <input
              id="securityCode"
              value={securityCode}
              data-test-id="checkout-security-code"
              onChange={(event) => {
                setSecurityCode(event.currentTarget.value);
              }}
            />
          </div>
        </section>
        <section>
          <button data-test-id="checkout-confirm-order">Confirm order</button>
          <p>Privacy</p>
        </section>
      </form>
    </>
  );
}
