/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    let ptr = this.length;
    if(ptr===0) return -1;
    return this[ptr-1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */