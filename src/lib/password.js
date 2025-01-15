function getRandomChar(text) {
  return text[Math.floor(Math.random() * text.length)];
}

export function generatePassword(config) {
  let result = "";
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const SPECIALS = "!@#$%^&*()_-+=[]{};:'\",.<>?/\\";

  let alphabet = LOWERCASE;
  result += getRandomChar(LOWERCASE);

  if (config.uppercase) {
    alphabet += UPPERCASE;
    result += getRandomChar(UPPERCASE);
  }
  return result;
}
