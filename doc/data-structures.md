# Data Structures

The primary function of computers is to store and retrieve data. In computer science, we represent data using various conceptual structures designed to optimize usability, storage speed, or storage space. Certain data structures may be more pertinent to use than other data structures based on how often you need to store or retrieve data.

In this section we will discuss the different kinds of data structures and how each structure is used to manage data.

## Table of Contents

1. [Set](#1-set)

## 1. Set

A **set** represents an unordered collection of items that contains no duplicates. Imagine a bag of items but each item can only be put in the bag once. When reaching into the bag, you have the opportunity to take any item out of the bag. Sets are denoted with curly brackets.

The **cardinality** of a set, **|A|**, is the number of items contained in that set. It is the length of the set.

```ts
// Example 1:
// { 2, 5, 7, 1 } is a set because it is a collection of numbers with no duplicates.

// Example 2:
// { 2, 2, 9, 8 } is not a set because 2 is duplicated.

// Example 3:
// If A = { 1, 4, 0 }, |A| = 3.
```

There are a few special set identities to be aware of:

To say that B is a **subset** of A, **B ⊂ A**, means that all elements of B are also elements of A. Note that by definition, A is a subset of A.

```ts
// Example 1:
// If A = { 4, 7, 9, 2 } and B = { 4, 9, 2 }, B is a subset of A.

// Example 2:
// If A = { 2 } and B = { 2 }, B ⊂ A.

// Example 3:
// If A = { 3, 8 } and B = { 5 }, B ⊄ A.
```

To say that B is a **proper subset** of A, **B ⊆ A**, means that B is a subset of A and B is not equal to A.

```ts
// Example 1:
// If A = { 1, 87, 3 } and B = { 3 }, B ⊆ A.

// Example 2:
// If A = { 2 } and B = { 2 }, B ⊈ A.
```

The **union** of A and B, **A ∪ B**, is a set which contains all elements of A and all elements of B.

```ts
// Example 1:
// If A = { 3, 8 } and B = { 0 }, A ∪ B = { 0, 3, 8 }.

// Example 2:
// If A = { 4, 5 } and B = { 4 }, A ∪ B = { 4, 5 }.
```

Conversely, the **intersection** if A and B, **A ∩ B**, is a set which contains only the elements of A which are also in B.

```ts
// Example 1:
// If A = { 2, 6 } and B = { 0, 2 }, A ∩ B = { 2 }.

// Example 2:
// If A = { 3, 7 } and B = { 1 }, A ∩ B = { }.
```

The **difference** between A and B, **A - B**, is the set of elements that belong to A but not B.

```ts
// Example 1:
// If A = { 1, 3, 5 } and B = { 1, 2, 3 }, A - B = { 5 }.

// Example 2:
// If A = { } and B = { 1 }, A - B = { }.
```

The **cartesian product** of A and B, **A ⨯ B**, is the set containing all order pairs of items from A and B. If A or B is an empty set, the cartesian product is an empty set.

```ts
// Example 1:
// If A = { 1, 2, 3 } and B = { 4, 5, 6 }, A ⨯ B = { (1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6) }.
```

The **power set** of A, **P(A)**, is the set containing the union of all subsets of A, including the empty set and the original set itself. An important property of a power set is that if the given set has a cardinality of `n`, the power set will have a cardinality of `2^n`.

```ts
// Example 1:
// If A = { 1, 2 }, P(A) = { {}, { 1 }, { 2 }, { 1, 2 }, }.
```

[Home](../README.md)
