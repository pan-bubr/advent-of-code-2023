// --- Day 1: Trebuchet?! ---

// As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills.
// Elves are having trouble reading the values on the document.
// The newly-improved calibration document consists of lines of text;
// each line originally contained a specific calibration value that the Elves now need to recover.
// On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet

// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
// Consider your entire calibration document. What is the sum of all of the calibration values?

// Part 2

// Your calculation isn't quite right.
// It looks like some of the digits are actually spelled out with letters:
// one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
// Equipped with this new information, you now need to find the real first and last digit on each line. For example:

// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen

// In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

// What is the sum of all of the calibration values?

export default function solve(input: string): [number, number] {
  const part1 = input
    .split("\n")
    .map((line) => calibrationLinePart1(line))
    .reduce((acc, n) => acc + n, 0);

  const part2 = input
    .split("\n")
    .map((line) => calibrationLinePart2(line))
    .reduce((acc, n) => acc + n, 0);

  return [part1, part2];
}

export function calibrationLinePart1(line: string): number {
  const numbers = line
    .split("")
    .map((c) => parseInt(c, 10))
    .filter((c) => !Number.isNaN(c))
    .join("");

  return parseInt(numbers[0] + numbers[numbers.length - 1], 10);
}

export function calibrationLinePart2(line: string): number {
  const numbers = line
    .replaceAll("oneight", "18")
    .replaceAll("twone", "21")
    .replaceAll("threeight", "38")
    .replaceAll("fiveight", "58")
    .replaceAll("sevenine", "79")
    .replaceAll("eightwo", "82")
    .replaceAll("eighthree", "82")
    .replaceAll("nineight", "98")
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9")
    .split("")
    .map((c) => parseInt(c, 10))
    .filter((c) => !Number.isNaN(c))
    .join("");

  return parseInt(numbers[0] + numbers[numbers.length - 1], 10);
}
