import sjson from 'secure-json-parse';

// Defining a json parse methode that returns undefined instead of causing errors
// if input is a string
// parse that string
// else always return undefined

export function parseJson(string) {
  if (!string) return undefined;

  try {
    return sjson(string);
  } catch {
    return undefined;
  }
}
