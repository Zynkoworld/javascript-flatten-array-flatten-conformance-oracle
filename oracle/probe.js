const flatten = (arr) => {
  return arr
    .reduce(
      (acc, el) =>
        Array.isArray(el) ? acc.concat(flatten(el)) : acc.concat(el),
      [],
    )
    .filter((el) => el !== null && el !== undefined);
};

const __in = [[], [0, 1, 2], [1, 2, null], [null, null, 3], [1, null, null, 4]];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: flatten(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
