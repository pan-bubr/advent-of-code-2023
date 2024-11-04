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
import day3 from "./solutions/day3.ts";
import day4 from "./solutions/day4.ts";
import day5 from "./solutions/day5.ts";

let part1: number = 0;
let part2: number = 0;

switch (day) {
  case "1":
    [part1, part2] = day1(input);
    break;
  case "2":
    [part1, part2] = day2(input);
    break;
  case "3":
    [part1, part2] = day3(input);
    break;
  case "4":
    [part1, part2] = day4(input);
    break;
  case "5":
    [part1, part2] = day5(input);
    break;
  default:
    alert(`Day ${day} not implemented yet.`);
}

console.log(
  `[Solution] 
  Part 1: ${part1}
  Part 2: ${part2}`,
);
