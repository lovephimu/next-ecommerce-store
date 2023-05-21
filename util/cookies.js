import { cookies } from 'next/headers';

// Defining a shorter method to get cookies
// The ?. (question mark and dot) is the optional chaining syntax.
// It checks if the value returned by cookies().get(name) is not null or undefined.
// If it is, the expression short-circuits and returns undefined.

export function getCookie(name) {
  return cookies().get(name)?.value;
}
