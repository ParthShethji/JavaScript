/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let result = [];
        let pending = functions.length;
        functions.forEach((fn, i) => {
            fn().then((value) => {
                result[i] = value;
                pending--;
                if (pending === 0) {
                    resolve(result);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */