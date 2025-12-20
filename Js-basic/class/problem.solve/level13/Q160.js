function check(str) {
  const letters = new Set();

  for (const ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      letters.add(ch);
    }
  }

  return letters.size === 26;
}
console.log(check("Sphinx of black quartz, judge my vow"))
