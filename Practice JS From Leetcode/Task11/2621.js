async function sleep(val) {
  new Promise((res,rej) => {
    setTimeout(res, val);
  })
}
console.log(sleep(4000))