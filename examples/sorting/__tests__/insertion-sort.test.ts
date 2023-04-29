import { InsertionSort } from "../insertion-sort.ts";
import { assert, assertEquals } from "std/testing/asserts.ts";

const comparator = (a: number, b: number) => a - b;

// boundary
Deno.test("returns an empty array when sorting an empty array", () => {
  const A: number[] = [];
  InsertionSort<number>(A, comparator);
  assertEquals(A.length, 0);
});

// boundary
Deno.test("returns the same array if the array is already sorted", () => {
  const A = [1, 3, 6, 7, 22];
  const ref = [1, 3, 6, 7, 22];
  InsertionSort<number>(A, comparator);
  assertEquals(A, ref);
});

// boundary
Deno.test("returns the same array if the array only contains one element", () => {
  const A = [3];
  const ref = [3];
  InsertionSort<number>(A, comparator);
  assertEquals(A, ref);
});

// routine
Deno.test("sorts an arbitrary array of length 2", () => {
  const val: number = Math.floor(Math.random() * 100);
  const A: number[] = [];

  A.push(val + 1);
  A.push(val);

  InsertionSort<number>(A, comparator);

  assert(A[0] <= A[1]);
});

// routine
Deno.test("sorts an arbitrary array of arbitrary length", () => {
  const len: number = Math.floor(Math.random() * 25) + 2;
  const A: number[] = [];

  for (let i = 0; i < len; i++) {
    A.push(Math.floor(Math.random() * 100));
  }

  InsertionSort<number>(A, comparator);

  for (let i = 0; i < A.length - 1; i++) {
    assert(A[i] <= A[i + 1]);
  }
});

// routine
Deno.test("sorts using a reverse comparator", () => {
  const revComparator = (a: number, b: number) => b - a;
  const len: number = Math.floor(Math.random() * 25) + 2;
  const A: number[] = [];

  for (let i = 0; i < len; i++) {
    A.push(Math.floor(Math.random() * 100));
  }

  InsertionSort<number>(A, revComparator);

  for (let i = 0; i < A.length - 1; i++) {
    assert(A[i] >= A[i + 1]);
  }
});

Deno.test("sorts using a length comparator", () => {
  const strComp = (a: string, b: string) => a.length - b.length;
  const A: string[] = ["my", "name", "is", "bob"];

  InsertionSort<string>(A, strComp);

  assertEquals(A[2], "bob");
  assertEquals(A[3], "name");
});

// routine
Deno.test("works flexibly with string generic types", () => {
  const A: string[] = ["abc", "123", "test", "Test"];
  const comp: (a: string, b: string) => number = (a: string, b: string) =>
    a.localeCompare(b);

  InsertionSort<string>(A, comp);

  assertEquals(A, ["123", "abc", "test", "Test"]);
});

// routine
Deno.test("works flexibly with object generic types", () => {
  interface myObj {
    name: string;
    id: number;
  }

  const A: myObj[] = [{ name: "hello", id: 2 }, { name: "george", id: 0 }];
  const comp: (a: myObj, b: myObj) => number = (a: myObj, b: myObj) =>
    a.id - b.id;

  InsertionSort<myObj>(A, comp);

  assertEquals(A, [{ name: "george", id: 0 }, {
    name: "hello",
    id: 2,
  }]);
});
