/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const ans = [];
    function helper(arr, depth){
        for(const val of arr){
            if(typeof val==='object' && depth<n){
                helper(val, depth+1);
            }
            else{
                ans.push(val);
            }
            
        }
        return ans;
    }
         return helper(arr, 0)
};