console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    return (b: number) => {
        return a + b
    }
}

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0;
    return () => {
        return ++count
    }
}


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeSuperCounter(start: number) {
    let value = start
    return () => {
        function increase() {
            return ++value
        };

        function decrease() {
            return value - 1
        }

        function reset() {
            return value = 0
        }

        function set(newStart: number) {
            value = newStart
        }

        return {
            increase,
            decrease,
            reset,
            set
        }
    }
}

let counter2 = makeSuperCounter(2)

let d = counter2().increase()

console.log(d)

let e = counter2().increase()

console.log(e)

console.log(counter2().increase())
console.log(counter2().decrease())
console.log(counter2().set(11))
console.log(counter2().increase())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10



//@ts-ignore
function superSum (num) {
    if (num <= 0) return 0;
    if (num === 1) return (n: number) => n;

}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion


// @ts-ignore
const sumTo = (n) => {
    if (n > 1) {
        return n + sumTo(n - 1)
    } else return n
}

console.log(sumTo(5))

// @ts-ignore
const factorial = (n) => {
    if (n > 1) {
        return n * factorial(n - 1)
    } else return n
}

console.log(factorial(5))

//@ts-ignore
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}

console.log(fib(1))

//@ts-ignore
function printList(list) {
    console.log(list.value)
    if (list.next) {
        printList(list.next)
    }
}


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

//@ts-ignore
function flatArray(arr) {
    let res: any = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatArray(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatArray([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]))

// just a plug
export default () => {
};