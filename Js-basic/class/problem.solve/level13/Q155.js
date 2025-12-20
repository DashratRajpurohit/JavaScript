
function Letters(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    
    if (!((code >= 65 && code <= 90) || code==32 || (code >= 97 && code <= 122))) {
      return false;
    }
  }
  return str.length > 0;
}

console.log(Letters("Hello")); 
