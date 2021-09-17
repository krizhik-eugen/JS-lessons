console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

let c = 10;

let prom = new Promise((resolve, reject) => {
    let a = 10;
    console.log(a);
    // ... some code
    // some async code
    // if (status >= 200 && status < 400) {
    //     resolve(request.body)
    // } else {
    //     reject()
    // }
    reject(0);
    //resolve({result: 5, a});
}); // res, rej

//console.log(prom)
// prom
//     .then(res => {
//             console.log('then res ', res);
//         },
//         err => {
//             console.log('then err ', err);
//             //throw 50;
//         }
//     )
//     .then(res2 => {
//             console.log('then res2 ', res2);
//         },
//         err => {
//             console.log('then err ', err);
//             //throw 50;
//         })
//     .then(res3 => {
//         console.log('then res3 ', res3);
//     }, err2 => {
//         console.log('then err2 ', err2);
//     });

// prom
//     .then(res => {
//
//     })
//     .catch(err => {
//
//     })
//     .then(res => {
//
//     })
//     .catch(err => {
//
//     })
//     .then(res => {
//
//     })
//     .catch(err => {
//
//     })


prom
    .then(res => {

    })
    .finally( () => {
        console.log('finally 1')
    })
    .then(res => {

    })
    .finally(() => {
        console.log('finally 2')
    })
    .then(res => {

    })
    .finally(() => {
        console.log('finally 3')
    })
    .catch(err => {
        console.log('!!!! err ', err)
    })
    .finally(() => {
        console.log('finally 3')
    })


console.log(c);

setInterval(() => {}, 1000);
//
// Promise.reject();
// Promise.resolve();
//
// Promise.all([p1, p2, p3]).then(res) // res -> []
// Promise.allSettled([p1, p2, p3]).then(res) // res -> [object]
// Promise.race([p1, p2, p3]).then().catch()

// just a plug
export default () => {
};