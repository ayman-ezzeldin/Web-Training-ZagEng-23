var nums = [1,2,3,4]
rr = function sum(accum, curr) { return accum * curr; }
var reduce = function(nums,fn,init) {
  if(nums.length===0) return init
  else { val= fn(init,nums[0])
  for(let i=1; i< nums.length;i++) {
    val = fn(val,nums[i])
  }
  return val
}}
console.log(reduce(nums,rr,5))