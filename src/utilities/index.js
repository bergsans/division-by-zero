export const compose = (...fns) => (initial) => fns.reduceRight((a, b) => b(a), initial);

export const isSame = (a) => (b) => a === b;

export const isNotSameIndex = (a) => (_b, i) => i !== a;
