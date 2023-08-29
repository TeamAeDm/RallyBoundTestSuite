function getUnicodeCodePoints(str) {
    const codePoints = [];
    for (const char of str) {
      const codePoint = char.codePointAt(0);
      codePoints.push(codePoint);
    }
    return codePoints;
  }

console.log(getUnicodeCodePoints("O’ Conn-él"));