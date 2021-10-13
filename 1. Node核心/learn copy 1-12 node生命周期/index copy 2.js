let i = 0;
console.time();
function test() {
  i++;
  if (i < 1000) {
    setImmediate(test);
    // setTimeout(test, 0);
  } else {
    console.timeEnd();
  }
}

test();
