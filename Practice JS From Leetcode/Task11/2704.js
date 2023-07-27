var expect = function(val)  {
  function tobe(input) {
    if(input===val) return true 
    else return false
  }
  function notToBe(inp) {
    if(inp!==val) return true
    else return false
  }
  return { tobe,notToBe}
}

console.log( expect(5).tobe(59) )