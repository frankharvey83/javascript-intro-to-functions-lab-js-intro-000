function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logWhisper(string) {
  if (string === string.toLowerCase()) {
    console.log('HELLO');
  }
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return ("I can't hear you!");
} if (string === string.toUpperCase())  {
  return ("YES INDEED!");
} else if (string === "I love you, Grandma.") {
  return ("I love you, too.");
}
  }
