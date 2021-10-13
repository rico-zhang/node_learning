async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function() {
  console.log("setTimeout0");
}, 0);
setTimeout(function() {
  console.log("setTimeout3");
}, 3);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function() {
  console.log("promise3");
});
console.log("script end");

/**
 * script start
 * async1 start
 * async2
 * promise1
 * promise2
 * script end
 * nextTick
 * async1 end 
 * promise3
 * 以下三个顺序不定 但是setTimeout0 肯定在setTimeout3 前面
 * 
 * timer: setTimeout0  setTimeout3
 * check: setImmediate

 */
