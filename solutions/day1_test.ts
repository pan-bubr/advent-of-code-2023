import { assertEquals } from "@std/assert";
import { calibrationLinePart1, calibrationLinePart2 } from "./day1.ts";

Deno.test(function calibrationLineTest() {
  assertEquals(calibrationLinePart1("1abc2"), 12);
  assertEquals(calibrationLinePart1("pqr3stu8vwx"), 38);
  assertEquals(calibrationLinePart1("a1b2c3d4e5f"), 15);
  assertEquals(calibrationLinePart1("treb7uchet"), 77);
});

Deno.test(function calibrationLine2Test() {
  assertEquals(calibrationLinePart2("two1nine"), 29);
  assertEquals(calibrationLinePart2("eightwothree"), 83);
  assertEquals(calibrationLinePart2("abcone2threexyz"), 13);
  assertEquals(calibrationLinePart2("xtwone3four"), 24);
  assertEquals(calibrationLinePart2("4nineeightseven2"), 42);
  assertEquals(calibrationLinePart2("zoneight234"), 14);
  assertEquals(calibrationLinePart2("7pqrstsixteen"), 76);
});
