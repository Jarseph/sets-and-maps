/**
 * return the union of two sets
 */
function union(s1, s2) {
  if(s2 === 0) {
    return s1;
  }
  const twoSets = new Set([...s1, ...s2]);
    console.log(twoSets);
  return twoSets;
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  return new Set([...s1].filter((x) => s2.has(x)));
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    return new Set([...s1].filter((x) => !s2.has(x)));
}

module.exports = { union, intersect, difference };
