// Write your code here

function permutations(word) {
  if (word.length === 1) return 1;

  return permutations(word.slice(0, -1)) * word.length;
}

console.log(permutations("hey"));
