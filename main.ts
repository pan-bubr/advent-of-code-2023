// Read input from CLI Args
let day = Deno.args[0];
let inputFilePath = Deno.args[1];

// If there is no input, ask for the std in
if (!day) day = prompt("What day do you want to solve?: ") || "";
if (!inputFilePath) {
  inputFilePath = prompt("Pass me the path to the input file: ") || "";
}

// Read input string
const input = (await Deno.readTextFile(inputFilePath).catch(() => {
  alert(`Error: Not able to read the file: ${inputFilePath}`);
  Deno.exit(1);
})).trim();

// Solve the question
import day1 from "./solutions/day1.ts";
import day2 from "./solutions/day2.ts";

let part1: string = "";
let part2: string = "";

switch (day) {
  case "1":
    [part1, part2] = day1(input);
    break;
  case "2":
    [part1, part2] = day2(input);
    break;
  default:
    alert(`Day ${day} not implemented yet.`);
}

console.log(
  `[Solution] 
  Part 1: ${part1}
  Part 2: ${part2}`,
);
