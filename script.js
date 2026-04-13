function stringChop(str, size) {
  // Handle null or empty input
  if (!str) return [];

  // Convert size to number (important because prompt gives string)
  size = Number(size);

  let result = [];

  // Loop and slice string
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
