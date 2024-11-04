import { assertEquals } from "@std/assert/equals";
import { Color, parseLine } from "./day2.ts";

Deno.test(function parseLineTest() {
  assertEquals(
    parseLine(
      "Game 1: 1 green, 6 red, 4 blue; 2 blue, 6 green, 7 red; 3 red, 4 blue, 6 green; 3 green; 3 blue, 2 green, 1 red",
    ),
    {
      id: 1,
      rounds: [
        [
          { color: Color.Green, amount: 1 },
          { color: Color.Red, amount: 6 },
          { color: Color.Blue, amount: 4 },
        ],
        [
          { color: Color.Blue, amount: 2 },
          { color: Color.Green, amount: 6 },
          { color: Color.Red, amount: 7 },
        ],
        [
          { color: Color.Red, amount: 3 },
          { color: Color.Blue, amount: 4 },
          { color: Color.Green, amount: 6 },
        ],
        [
          { color: Color.Green, amount: 3 },
        ],
        [
          { color: Color.Blue, amount: 3 },
          { color: Color.Green, amount: 2 },
          { color: Color.Red, amount: 1 },
        ],
      ],
    },
  );
});
