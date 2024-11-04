//--- Day 2: Cube Conundrum ---

// You're launched high into the atmosphere!
// The apex of your trajectory just barely reaches the surface of a large island floating in the sky.
// You gently land in a fluffy pile of leaves.
// It's quite cold, but you don't see much snow.
// An Elf runs over to greet you.

// The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow.
// He'll be happy to explain the situation, but it's a bit of a walk, so you have some time.
// They don't get many visitors up here; would you like to play a game in the meantime?

// As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue.
// Each time you play this game, he will hide a secret number of cubes of each color in the bag,
// and your goal is to figure out information about the number of cubes.

// To get information, once a bag has been loaded with cubes, the Elf will reach into the bag,
// grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

// You play several games and record the information from each game (your puzzle input). E
// ach game is listed with its ID number (like the 11 in Game 11: ...) followed by
// a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

// For example, the record of a few games might look like this:

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

// In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

// The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

// In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.

// Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?

// --- Part Two ---

// The Elf says they've stopped producing snow because they aren't getting any water!
// He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!

// As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

// Again consider the example games from earlier:

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

//     In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
//     Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.
//     Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
//     Game 4 required at least 14 red, 3 green, and 15 blue cubes.
//     Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.

// The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.

// For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?

export enum Color {
  Green,
  Red,
  Blue,
}

export interface Guess {
  color: Color;
  amount: number;
}

export type Round = Guess[];

export interface Game {
  id: number;
  rounds: Round[];
}

export function parseLine(line: string): Game {
  const [header, body] = line.split(": ");

  const gameIdMatch = header.match(/Game (\d+)/);
  if (!gameIdMatch) return { id: 0, rounds: [] };

  const roundsArray = body.split("; ").map((round) => {
    // 1 green, 6 red, 4 blue

    const draws = round.split(", ").map((draw) => {
      // 1 green
      const [num, color] = draw.split(" ");

      switch (color) {
        case "green":
          return { color: Color.Green, amount: parseInt(num) };
        case "blue":
          return { color: Color.Blue, amount: parseInt(num) };
        case "red":
          return { color: Color.Red, amount: parseInt(num) };
        default:
          return { color: Color.Green, amount: 0 };
      }
    });

    return draws;
  });

  return {
    id: parseInt(gameIdMatch[1]),
    rounds: roundsArray,
  };
}

export default function solve(input: string): [string, string] {
  const games = input.split("\n").map(parseLine);

  const part1 = games.filter((game) => {
    return game.rounds.every((round) => {
      //the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes

      let red = 12, green = 13, blue = 14;
      round.forEach((draw) => {
        switch (draw.color) {
          case Color.Green:
            green -= draw.amount;
            break;
          case Color.Red:
            red -= draw.amount;
            break;
          case Color.Blue:
            blue -= draw.amount;
            break;
        }
      });

      return red >= 0 && blue >= 0 && green >= 0;
    });
  }).map((game) => game.id).reduce((acc, n) => (acc + n), 0);

  const part2 = games.map((game) => {
    let min_red = 0, min_green = 0, min_blue = 0;

    game.rounds.forEach((round) => {
      round.forEach((draw) => {
        switch (draw.color) {
          case Color.Green:
            min_green = Math.max(min_green, draw.amount);
            break;
          case Color.Red:
            min_red = Math.max(min_red, draw.amount);
            break;
          case Color.Blue:
            min_blue = Math.max(min_blue, draw.amount);
            break;
        }
      });
    });

    return min_red * min_green * min_blue;
  }).reduce((acc, n) => (acc + n), 0);

  return [part1, part2];
}
