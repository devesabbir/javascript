function multiply(a, b, c) {
  return a * b * c;
}

const res = multiply(2, 3, 4);

function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const curriedMultiplyRes = curriedMultiply(2);

function discountCalculator(price, dis) {
  const discountPercent = dis / 100;
  const discount = price * discountPercent;
  return price - discount;
}

// const total = discountCalculator(100, 10);
// console.log(total);

function disCurried(dis) {
  const percent = dis / 100;
  return function (price) {
    const discount = price * percent;
    return price - discount;
  };
}

const disCal = disCurried(10);
// console.log(disCal(100));

function curryConverter(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curriedFn(...args, ...nextArgs);
      };
    }
  };
}

const curryResult = curryConverter(discountCalculator);

console.log(curryResult(100, 10));
