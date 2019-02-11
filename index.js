function add(a, b) {
    return a += b
  }

function subtract (a, b) {
  return a-+b
}

function multiply (a, b) {
  return a*=b
}

function divide (a, b) {
  return a/= b
}

function inc(n) {
return ++n
}

function dec(n) {
  return --n
}

function makeInt (n) {
  var parsed = parseInt ('0', 10);
  if (isNaN (parsed)) {
    return 0
  }
  return parsed * 100;
}
