const { assert } = require("chai");

const {
   isPrimeNumber,
   nFactorial,
   swapIndex,
   minmaxNumberInAnArray,
   multiplicationTable,
   countOccurrence,
   sumUp,
   longestWord,
   stringPrettier,
   isPalindrome,
   removeIfGreaterThan,
   howManyPrime,
   addToArrayAndIncrease,
   combineDuplicates,
   maxSumArray,
   filterByYear,
   calculateSemesters,
   examResult,
   addArrayFormInteger,
   higherOrderFilter,
} = require("../../index");

describe("Js skill test by IOX [PART-1]", () => {
   it("factorial", () => {
      const result = nFactorial(3);
      const result2 = nFactorial(4);

      assert.equal(result, 6);
      assert.equal(result2, 24);
   });

   it("isPrimeNumber", () => {
      const result1 = isPrimeNumber(3);
      const result2 = isPrimeNumber(5);
      const result3 = isPrimeNumber(6);
      const result4 = isPrimeNumber(11);
      const result5 = isPrimeNumber(12);
      const result6 = isPrimeNumber("hello");

      assert.equal(result1, true);
      assert.equal(result2, true);
      assert.equal(result3, false);
      assert.equal(result4, true);
      assert.equal(result5, false);
      assert.equal(result6, null);
   });

   it("swapIndex", () => {
      const array = [3, 5, 12, 15, 6, 7, 8, 12];

      const result = swapIndex(array, 1, 3);

      assert.deepEqual(result, [3, 15, 12, 5, 6, 7, 8, 12]);
   });
   it("swapIndex", () => {
      const array = [3, 5, 12, 15, 6, 7, 8, 12];

      const result = swapIndex(array, 0, 18);

      assert.deepEqual(result, [3, 5, 12, 15, 6, 7, 8, 12]);
   });
   it("swapIndex", () => {
      const array = [3, 5, 12, 15, 6, 7, 8, 12];

      const result = swapIndex(array, 0, 7);

      assert.deepEqual(result, [12, 5, 12, 15, 6, 7, 8, 3]);
   });

   it("minmaxNumberInAnArray", () => {
      const array = [5, 7, 2, 4, 8, 10, 43];
      const array2 = [5, 7, 1, 4, 8, 80, 43];
      const array3 = [-12, -100, -3, 8, 80, -1];

      const result1 = minmaxNumberInAnArray(array);
      const result2 = minmaxNumberInAnArray(array2);
      const result3 = minmaxNumberInAnArray(array3);
      const result4 = minmaxNumberInAnArray("hello");

      assert.deepEqual(result1, { max: 6, min: 2 });
      assert.deepEqual(result2, { max: 5, min: 2 });
      assert.deepEqual(result3, { max: 4, min: 1 });
      assert.deepEqual(result4, null);
   });

   it("multiplicationTable", () => {
      const fourToTwelve = {
         "4 x 1": 4,
         "4 x 2": 8,
         "4 x 3": 12,
         "4 x 4": 16,
         "4 x 5": 20,
         "4 x 6": 24,
         "4 x 7": 28,
         "4 x 8": 32,
         "4 x 9": 36,
         "4 x 10": 40,
         "4 x 11": 44,
         "4 x 12": 48,
      };

      const fourToFive = {
         "4 x 1": 4,
         "4 x 2": 8,
         "4 x 3": 12,
         "4 x 4": 16,
         "4 x 5": 20,
      };

      const eightToTen = {
         "8 x 1": 8,
         "8 x 2": 16,
         "8 x 3": 24,
         "8 x 4": 32,
         "8 x 5": 40,
         "8 x 6": 48,
         "8 x 7": 56,
         "8 x 8": 64,
         "8 x 9": 72,
         "8 x 10": 80,
      };

      const result1 = multiplicationTable(4);
      const result2 = multiplicationTable(4, 5);
      const result3 = multiplicationTable(8, 10);
      const result4 = multiplicationTable(0, 10);

      assert.deepEqual(result1, fourToTwelve);
      assert.deepEqual(result2, fourToFive);
      assert.deepEqual(result3, eightToTen);
      assert.deepEqual(result4, null);
   });

   it("countOccurrence", () => {
      const string1 =
         "she sells seashells on a seashore. sea has a lot of water";
      const string2 =
         "Black bug bleeds blue blood, what color blood does a blue bug bleed?";

      const result1 = countOccurrence(string1, "sea");
      const result2 = countOccurrence(string1, "she");
      const result3 = countOccurrence(string1, "sell");
      const result4 = countOccurrence(string2, "bl");
      const result5 = countOccurrence(string2, "answer");

      assert.equal(result1, 3);
      assert.equal(result2, 2);
      assert.equal(result3, 1);
      assert.equal(result4, 7);
      assert.equal(result5, null);
   });

   it("sumUp", () => {
      const result1 = sumUp(4, 6, 8, 9);
      const result2 = sumUp(4, 6);
      const result3 = sumUp(4, 6, "hello");

      assert.equal(result1, 27);
      assert.equal(result2, 10);
      assert.equal(result3, null);
   });

   it("longestWord", () => {
      const string = "A quick brown fox jumps over a lazy dog";
      const string2 = "Among the string i am lonnnnnnngest one";
      const string3 =
         "Schizophrenia is a chronic brain disorder that affects less than one percent of the U.S. population";

      const result1 = longestWord(string);
      const result2 = longestWord(string2);
      const result3 = longestWord(string3);
      const result4 = longestWord(213);

      assert.deepEqual(result1, { length: 5, string: "jumps" });
      assert.deepEqual(result2, { length: 13, string: "lonnnnnnngest" });
      assert.deepEqual(result3, { length: 13, string: "Schizophrenia" });
      assert.deepEqual(result4, null);
   });

   it("stringPrettier", () => {
      const string1 =
         "---****  @%$*     I*%%    have=   a   lot of      white-spaces      in, my    string()    ";

      const string2 = "  I===am**not%%%that--ugl***but";

      const result1 = stringPrettier(string1);
      const result2 = stringPrettier(string2);
      const result3 = stringPrettier(454);

      assert.equal(result1, "I have a lot of white spaces in my string.");
      assert.equal(result2, "I am not that ugl but.");
      assert.equal(result3, null);
   });

   it("isPalindrome", () => {
      const string1 = "a man a plan a canal panama";
      const string2 = "mr owl ate my metal worm";
      const string3 = "i am not a palindrome";
      const string4 = "A man, a plan, a canal, Panama!";
      const string5 = "Mr. Owl ate my metal worm.";
      const string6 = "Was it a car or a cat I saw?";
      const string7 = "No lemon, no melon.";
      const string8 = "Not lemon, no melon.";
      const string9 = "evilisanameofafoemanasilive";

      const result1 = isPalindrome(string1);
      const result2 = isPalindrome(string2);
      const result3 = isPalindrome(string3);
      const result4 = isPalindrome(string4);
      const result5 = isPalindrome(string5);
      const result6 = isPalindrome(string6);
      const result7 = isPalindrome(string7);
      const result8 = isPalindrome(string8);
      const result9 = isPalindrome(string9);
      const result10 = isPalindrome(8);

      assert.equal(result1, true);
      assert.equal(result2, true);
      assert.equal(result3, false);
      assert.equal(result4, true);
      assert.equal(result5, true);
      assert.equal(result6, true);
      assert.equal(result7, true);
      assert.equal(result8, false);
      assert.equal(result9, true);
      assert.equal(result10, null);
   });

   it("removeIfGreaterThan", () => {
      const input = [3, 5, 5, 3, 3, 6, 7, 3, 9, 2, 9, 2, 1, 1, 13, 19, 10];

      const result1 = removeIfGreaterThan(input, 9);

      assert.deepEqual(result1, [3, 5, 5, 3, 3, 6, 7, 3, 9, 2, 9, 2, 1, 1]);
   });
   it("removeIfGreaterThan", () => {
      const input = [3, 5, 5, 3, 3, 6, 7, 3, 9, 2, 9, 2, 1, 1, 13, 19, 10];

      const result2 = removeIfGreaterThan(input, 6);

      assert.deepEqual(result2, [3, 5, 5, 3, 3, 6, 3, 2, 2, 1, 1]);
   });

   it("removeIfGreaterThan", () => {
      const input = [3, 5, 5, 3, 3, 6, 7, 3, 9, 2, 9, 2, 1, 1, 13, 19, 10];

      const result3 = removeIfGreaterThan(input, 2);
      const result4 = removeIfGreaterThan(123, 4);
      const result5 = removeIfGreaterThan(input, "hello");
      const expected = [2, 2, 1, 1];

      assert.deepEqual(result3, expected);
      assert.equal(result4, null);
      assert.equal(result5, null);
   });

   it("howManyPrime", () => {
      const result1 = howManyPrime(2);
      const result2 = howManyPrime(11);
      const result3 = howManyPrime(17);
      const result4 = howManyPrime(23);
      const result5 = howManyPrime(73);
      const result6 = howManyPrime("hello");

      assert.deepEqual(result1, 2);
      assert.deepEqual(result2, [2, 3, 5, 7]);
      assert.deepEqual(result3, [2, 3, 5, 7, 11, 13]);
      assert.deepEqual(result4, [2, 3, 5, 7, 11, 13, 17, 19]);
      assert.deepEqual(
         result5,
         [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71,
         ]
      );
      assert.equal(result6, null);
   });

   it("addToArrayAndIncrease", () => {
      const items = [
         { item: "potato", qty: 1 },
         { item: "tomato", qty: 1 },
         { item: "chillies", qty: 1 },
         { item: "green-pepper", qty: 1 },
      ];

      const result = addToArrayAndIncrease(items, "potato");
      addToArrayAndIncrease(items, "potato");
      addToArrayAndIncrease(items, "banana");
      addToArrayAndIncrease(items, "mango");
      addToArrayAndIncrease(items, "Potato");
      addToArrayAndIncrease(items, "Strawberry");

      assert.deepEqual(result, [
         { item: "strawberry", qty: 1 },
         { item: "mango", qty: 1 },
         { item: "banana", qty: 1 },
         { item: "potato", qty: 4 },
         { item: "tomato", qty: 1 },
         { item: "chillies", qty: 1 },
         { item: "green-pepper", qty: 1 },
      ]);
   });

   it("combineDuplicates", () => {
      const duplicates = [
         { item: "apple", quantity: 2 },
         { item: "orange", quantity: 5 },
         { item: "apple", quantity: 1 },
         { item: "apple", quantity: 2 },
         { item: "pineapple", quantity: 3 },
         { item: "strawberry", quantity: 7 },
         { item: "orange", quantity: 1 },
         { item: "grape", quantity: 7 },
         { item: "mango", quantity: 1 },
      ];

      const result1 = combineDuplicates(duplicates);
      const result2 = combineDuplicates(34);

      assert.deepEqual(result1, {
         apple: 5,
         orange: 6,
         pineapple: 3,
         strawberry: 7,
         grape: 7,
         mango: 1,
      });

      assert.equal(result2, null);
   });

   it("maxSumArray", () => {
      const array1 = [2, 3, 4, 5, 14];
      const array2 = [3, 22, 4, 5, 14];
      const array3 = [3, 22, 4, 5, 10];
      const array4 = [3, 22, 4, 5, 10, 5, 7];

      const result1 = maxSumArray(array1);
      const result2 = maxSumArray(array2);
      const result3 = maxSumArray(array3);
      const result4 = maxSumArray(array4);
      const result5 = maxSumArray(null);

      assert.equal(result1, true);
      assert.equal(result2, false);
      assert.equal(result3, true);
      assert.equal(result4, false);
      assert.equal(result5, null);
   });

   it("filterByYear", () => {
      const people = [
         {
            profession: "doctor",
            avgIncome: [
               { year: "2020", income: 8000 },
               { year: "2021", income: 10000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 12000 },
            ],
         },
         {
            profession: "web designer",
            avgIncome: [
               { year: "2020", income: 10000 },
               { year: "2021", income: 7000 },
               { year: "2022", income: 9500 },
               { year: "2023", income: 7800 },
            ],
         },
         {
            name: "Leo",
            profession: "fisherman",
            avgIncome: [
               { year: "2020", income: 12000 },
               { year: "2021", income: 5000 },
               { year: "2022", income: 8500 },
               { year: "2023", income: 7000 },
            ],
         },
         {
            profession: "surgeon",
            avgIncome: [
               { year: "2020", income: 30000 },
               { year: "2021", income: 20000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 10000 },
            ],
         },
         {
            profession: "nurse",
            avgIncome: [
               { year: "2020", income: 10500 },
               { year: "2021", income: 9500 },
               { year: "2022", income: 10000 },
               { year: "2023", income: 9000 },
            ],
         },
         {
            profession: "fashion designer",
            avgIncome: [
               { year: "2020", income: 3000 },
               { year: "2021", income: 8000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 10000 },
            ],
         },
         {
            profession: "game developer",
            avgIncome: [
               { year: "2021", income: 5000 },
               { year: "2021", income: 13000 },
               { year: "2022", income: 12000 },
               { year: "2023", income: 10000 },
            ],
         },

         {
            profession: "comedian",
            avgIncome: [
               { year: "2020", income: 4000 },
               { year: "2021", income: 10000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 12000 },
            ],
         },
         {
            profession: "web developer",
            avgIncome: [
               { year: "2020", income: 13000 },
               { year: "2021", income: 8000 },
               { year: "2022", income: 9500 },
               { year: "2023", income: 12000 },
            ],
         },
         {
            profession: "e sport player",
            avgIncome: [
               { year: "2020", income: 500 },
               { year: "2021", income: 2000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 15000 },
            ],
         },
         {
            profession: "civil engineer",
            avgIncome: [
               { year: "2020", income: 15000 },
               { year: "2021", income: 10000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 12000 },
            ],
         },
         {
            profession: "mechanical engineer",
            avgIncome: [
               { year: "2020", income: 17000 },
               { year: "2021", income: 10000 },
               { year: "2022", income: 9000 },
               { year: "2023", income: 12000 },
            ],
         },
      ];

      const result1 = filterByYear(people, "2022");
      const result2 = filterByYear(people, "2021");
      const result3 = filterByYear(people, "2025");
      const result4 = filterByYear(34);

      const output1 = [
         { profession: "game developer", income: 12000 },
         { profession: "nurse", income: 10000 },
         { profession: "web designer", income: 9500 },
         { profession: "web developer", income: 9500 },
         { profession: "doctor", income: 9000 },
         { profession: "surgeon", income: 9000 },
         { profession: "fashion designer", income: 9000 },
         { profession: "comedian", income: 9000 },
         { profession: "e sport player", income: 9000 },
         { profession: "civil engineer", income: 9000 },
         { profession: "mechanical engineer", income: 9000 },
         { profession: "fisherman", income: 8500 },
      ];

      const output2 = [
         { profession: "surgeon", income: 20000 },
         { profession: "doctor", income: 10000 },
         { profession: "comedian", income: 10000 },
         { profession: "civil engineer", income: 10000 },
         { profession: "mechanical engineer", income: 10000 },
         { profession: "nurse", income: 9500 },
         { profession: "fashion designer", income: 8000 },
         { profession: "web developer", income: 8000 },
         { profession: "web designer", income: 7000 },
         { profession: "fisherman", income: 5000 },
         { profession: "game developer", income: 5000 },
         { profession: "e sport player", income: 2000 },
      ];

      assert.deepEqual(result1, output1);
      assert.deepEqual(result2, output2);
      assert.deepEqual(result3, null);
   });

   it("calculateSemesters", () => {
      const semester1 = [
         {
            name: "Jimmy",
            scores: [
               { subject: "english", score: 44 },
               { subject: "math", score: 43 },
               { subject: "science", score: 78 },
               { subject: "geography", score: 82 },
               { subject: "history", score: 72 },
            ],
         },
         {
            name: "carl",
            scores: [
               { subject: "english", score: 37 },
               { subject: "math", score: 80 },
               { subject: "science", score: 91 },
               { subject: "geography", score: 47 },
               { subject: "history", score: 66 },
            ],
         },
         {
            name: "billy",
            scores: [
               { subject: "english", score: 43 },
               { subject: "math", score: 37 },
               { subject: "science", score: 41 },
               { subject: "geography", score: 87 },
               { subject: "history", score: 76 },
            ],
         },
         {
            name: "andrew",
            scores: [
               { subject: "english", score: 63 },
               { subject: "math", score: 28 },
               { subject: "science", score: 61 },
               { subject: "geography", score: 63 },
               { subject: "history", score: 49 },
            ],
         },
         {
            name: "keith",
            scores: [
               { subject: "english", score: 33 },
               { subject: "math", score: 76 },
               { subject: "science", score: 53 },
               { subject: "geography", score: 71 },
               { subject: "history", score: 48 },
            ],
         },
      ];

      const semester2 = [
         {
            name: "Jimmy",
            scores: [
               { subject: "english", score: 44 },
               { subject: "math", score: 60 },
               { subject: "science", score: 44 },
               { subject: "geography", score: 69 },
               { subject: "history", score: 44 },
            ],
         },
         {
            name: "carl",
            scores: [
               { subject: "english", score: 69 },
               { subject: "math", score: 76 },
               { subject: "science", score: 79 },
               { subject: "geography", score: 97 },
               { subject: "history", score: 88 },
            ],
         },
         {
            name: "billy",
            scores: [
               { subject: "english", score: 85 },
               { subject: "math", score: 47 },
               { subject: "science", score: 47 },
               { subject: "geography", score: 54 },
               { subject: "history", score: 62 },
            ],
         },
         {
            name: "andrew",
            scores: [
               { subject: "english", score: 50 },
               { subject: "math", score: 44 },
               { subject: "science", score: 41 },
               { subject: "geography", score: 75 },
               { subject: "history", score: 44 },
            ],
         },
         {
            name: "keith",
            scores: [
               { subject: "english", score: 85 },
               { subject: "math", score: 50 },
               { subject: "science", score: 62 },
               { subject: "geography", score: 61 },
               { subject: "history", score: 90 },
            ],
         },
      ];

      const semester3 = [
         {
            name: "Jimmy",
            scores: [
               { subject: "english", score: 80 },
               { subject: "math", score: 91 },
               { subject: "science", score: 46 },
               { subject: "geography", score: 93 },
               { subject: "history", score: 60 },
            ],
         },
         {
            name: "carl",
            scores: [
               { subject: "english", score: 98 },
               { subject: "math", score: 65 },
               { subject: "science", score: 98 },
               { subject: "geography", score: 42 },
               { subject: "history", score: 85 },
            ],
         },
         {
            name: "billy",
            scores: [
               { subject: "english", score: 74 },
               { subject: "math", score: 48 },
               { subject: "science", score: 41 },
               { subject: "geography", score: 78 },
               { subject: "history", score: 70 },
            ],
         },
         {
            name: "andrew",
            scores: [
               { subject: "english", score: 68 },
               { subject: "math", score: 53 },
               { subject: "science", score: 67 },
               { subject: "geography", score: 73 },
               { subject: "history", score: 82 },
            ],
         },
         {
            name: "keith",
            scores: [
               { subject: "english", score: 44 },
               { subject: "math", score: 41 },
               { subject: "science", score: 72 },
               { subject: "geography", score: 36 },
               { subject: "history", score: 68 },
            ],
         },
      ];
      const semester4 = [
         {
            name: "Jimmy",
            scores: [
               { subject: "english", score: 40 },
               { subject: "math", score: 71 },
               { subject: "science", score: 72 },
               { subject: "geography", score: 63 },
               { subject: "history", score: 64 },
            ],
         },
         {
            name: "carl",
            scores: [
               { subject: "english", score: 61 },
               { subject: "math", score: 25 },
               { subject: "science", score: 48 },
               { subject: "geography", score: 42 },
               { subject: "history", score: 35 },
            ],
         },
         {
            name: "billy",
            scores: [
               { subject: "english", score: 41 },
               { subject: "math", score: 47 },
               { subject: "science", score: 72 },
               { subject: "geography", score: 68 },
               { subject: "history", score: 50 },
            ],
         },
         {
            name: "andrew",
            scores: [
               { subject: "english", score: 98 },
               { subject: "math", score: 33 },
               { subject: "science", score: 57 },
               { subject: "geography", score: 33 },
               { subject: "history", score: 72 },
            ],
         },
         {
            name: "keith",
            scores: [
               { subject: "english", score: 84 },
               { subject: "math", score: 81 },
               { subject: "science", score: 92 },
               { subject: "geography", score: 96 },
               { subject: "history", score: 91 },
            ],
         },
      ];

      const result1 = calculateSemesters(semester1);
      const output1 = [
         { name: "carl", score: 321 },
         { name: "Jimmy", score: 319 },
         { name: "billy", score: 284 },
         { name: "keith", score: 281 },
         { name: "andrew", score: 264 },
      ];

      const result2 = calculateSemesters(semester1, semester2);
      const output2 = [
         { name: "carl", score: 365 },
         { name: "keith", score: 315 },
         { name: "Jimmy", score: 290 },
         { name: "billy", score: 290 },
         { name: "andrew", score: 259 },
      ];

      const result3 = calculateSemesters(semester1, semester2, semester3);
      const output3 = [
         { name: "carl", score: 373 },
         { name: "Jimmy", score: 317 },
         { name: "billy", score: 297 },
         { name: "keith", score: 297 },
         { name: "andrew", score: 287 },
      ];
      const result4 = calculateSemesters(
         semester1,
         semester2,
         semester3,
         semester4
      );
      const output4 = [
         { name: "keith", score: 334 },
         { name: "carl", score: 333 },
         { name: "Jimmy", score: 315 },
         { name: "billy", score: 292 },
         { name: "andrew", score: 289 },
      ];

      const result5 = calculateSemesters([]);

      assert.deepEqual(result1, output1);
      assert.deepEqual(result2, output2);
      assert.deepEqual(result3, output3);
      assert.deepEqual(result4, output4);
      assert.equal(result5, null);
   });

   it("examResult", () => {
      const exam1 = [
         {
            name: "emily",
            math: 45,
            english: 54,
            geography: 77,
            english: 66,
            biology: 77,
         },
         {
            name: "freya",
            math: 73,
            english: 46,
            geography: 58,
            english: 78,
            biology: 46,
         },
         {
            name: "grace",
            math: 45,
            english: 54,
            geography: 77,
            english: 66,
            biology: 77,
         },
         {
            name: "harley",
            math: 69,
            english: 87,
            geography: 57,
            english: 84,
            biology: 64,
         },
         {
            name: "iris",
            math: 39,
            english: 87,
            geography: 97,
            english: 54,
            biology: 84,
         },
      ];

      const exam2 = [
         {
            name: "emily",
            math: 40,
            english: 54,
            geography: 77,
            english: 66,
            biology: 77,
            politics: 88,
            sport: 73,
         },
         {
            name: "freya",
            math: 73,
            english: 46,
            geography: 58,
            english: 78,
            biology: 46,
            politics: 48,
            sport: 35,
         },
         {
            name: "grace",
            math: 45,
            english: 54,
            geography: 77,
            english: 66,
            biology: 77,
            politics: 42,
            sport: 64,
         },
         {
            name: "harley",
            math: 69,
            english: 87,
            geography: 57,
            english: 84,
            biology: 64,
            politics: 76,
            sport: 42,
         },
      ];

      const result1 = examResult(exam1, exam2);

      const output1 = {
         emily: {
            math: 85,
            english: 132,
            geography: 154,
            biology: 154,
            politics: 88,
            sport: 73,
         },
         freya: {
            math: 146,
            english: 156,
            geography: 116,
            biology: 92,
            politics: 48,
            sport: 35,
         },
         grace: {
            math: 90,
            english: 132,
            geography: 154,
            biology: 154,
            politics: 42,
            sport: 64,
         },
         harley: {
            math: 138,
            english: 168,
            geography: 114,
            biology: 128,
            politics: 76,
            sport: 42,
         },
         iris: { math: 39, english: 54, geography: 97, biology: 84 },
      };

      assert.deepEqual(result1, output1);
   });

   it("addArrayFormInteger", () => {
      const array1 = [1, 3];
      const array2 = [1, 9];
      const array3 = [9, 9];
      const array4 = [9, 9, 9];
      const array5 = [9, 9, 9, "hello", 4, 5, 1];

      const result1 = addArrayFormInteger(array1, 35);
      const result2 = addArrayFormInteger(array2, 1);
      const result3 = addArrayFormInteger(array2, 2);
      const result4 = addArrayFormInteger(array3, 1);
      const result5 = addArrayFormInteger(array4, 1);
      const result6 = addArrayFormInteger(array5, 2);
      const result7 = addArrayFormInteger(array4, "hi");

      assert.deepEqual(result1, [4, 8]);
      assert.deepEqual(result2, [2, 0]);
      assert.deepEqual(result3, [2, 1]);
      assert.deepEqual(result4, [1, 0, 0]);
      assert.deepEqual(result5, [1, 0, 0, 0]);
      assert.equal(result6, null);
      assert.equal(result7, null);
   });

   it("higherOrderFilter", () => {
      const numbers = [3, 4, 5, 6, 7, 8, 12, 19, 22, 33];

      function greaterThan(num) {
         if (num > 5) return num;
      }

      function evenNumbers(num) {
         if (num % 2 === 0) return num;
      }

      const five = higherOrderFilter(numbers, greaterThan);
      const even = higherOrderFilter(numbers, evenNumbers);
      const other = higherOrderFilter(23, greaterThan);
      const other2 = higherOrderFilter(numbers, "hello");

      assert.deepEqual(five, [6, 7, 8, 12, 19, 22, 33]);
      assert.deepEqual(even, [4, 6, 8, 12, 22]);
      assert.equal(other, null);
      assert.equal(other2, null);
   });
});
