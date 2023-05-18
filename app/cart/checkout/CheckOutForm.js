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
        <section>
          <div>
            <label htmlFor="firstName">First name</label>
            <label htmlFor="lastName">Last name</label>
          </div>
          <div>
            <input
              id="firstName"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.currentTarget.value);
              }}
            />
            <input
              id="lastName"
              value={lastName}
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
              onChange={(event) => {
                setCity(event.currentTarget.value);
              }}
            />
            <input
              id="postalCode"
              value={postalCode}
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
              onChange={(event) => {
                setCountry(event.currentTarget.value);
              }}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="creditCard">Card Number</label>
          </div>
          <div>
            <input
              id="creditCard"
              value={creditCard}
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
              onChange={(event) => {
                setExpirationDate(event.currentTarget.value);
              }}
            />
            <input
              id="securityCode"
              value={securityCode}
              onChange={(event) => {
                setSecurityCode(event.currentTarget.value);
              }}
            />
          </div>
        </section>
      </form>
    </>
  );
}
