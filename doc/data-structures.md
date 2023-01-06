# Data Structures

The primary function of computers is to store and retrieve data. In computer science, we represent data using various conceptual structures designed to optimize usability, storage speed, or storage space. Certain data structures may be more pertinent to use than other data structures based on how often you need to store or retrieve data.

In this section we will discuss the different kinds of data structures and how each structure is used to manage data.

## Table of Contents

1. [Set](#1-set)
2. [Array](#2-array)
3. [Queue](#3-queue)
4. [Stack](#4-stack)

## 1. Set

A **set** is an unordered collection of items that contains no duplicates. Imagine a bag of items but each item can only be put in the bag once. When reaching into the bag, you have the opportunity to take any item out of the bag. Sets are denoted with curly brackets.

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

## 2. Array

An **array** is a collection of items with an index, or position, assigned to each item. Most (but not all) implementations of arrays are **0-indexed**, meaning they begin counting index from 0. Because items have their index recorded, order matters. As with most data structures, the number of items contained in an array is called its **length**. Arrays are denoted with square brackets.

Many implementations of arrays allow users to insert and delete items at any position.

```ts
// Example 1:
// [ 1, 5, 9, 5 ] is an array.

// Example 2:
// Let A = [ 1, 92, 0 ] be an array.
// Then A[0] = 1, A[1] = 92, and A[2] = 0.

// Example 3:
// Let A = [ 1, 3, 4, 5 ] be an array.
// Insert 2 at A[1].
// Then A = [ 1, 2, 3, 4, 5 ].
```

## 3. Queue

A **queue** is a collection of items that are inserted from a specific direction and deletion from another direction. In this way, queues follow **FIFO** (first in, first out) ordering. Think of a queue like a ticket line where position in the line matters. New members to the line are added to the back, with members receiving their ticket and exiting the line from the front. When a new item is added, it is **enqueued** to the queue, and when an item is deleted, it is **dequeued** from the queue. Queues are denoted with square brackets and usually enqueue on the left and dequeue on the right.

```ts
// Example 1:
// Let A = [ 23, 94, 7 ] be a queue.
// Enqueue 3 to A.
// Then A = [ 3, 23, 94, 7 ].

// Example 2:
// Let A = [ 9 ] be a queue.
// Dequeue from A.
// Then A = [ ] and the length of A is 0.
```

## 4. Stack

A **stack** is a collection of items that are inserted and deleted from the same direction. Stacks follow **LIFO** (last in, first out) ordering. Think of a queue like a PEZ candy dispenser. Candy can only be taken from the place in which it is inserted. When a new item is added, it is **pushed** to the stack, and when an item is deleted, it is **popped** from the stack. Stacks are denoted with square brackets and usually push and pop on the right.

```ts
// Example 1:
// Let A = [ 1, 4, 0 ] be a stack.
// Push 16 to A.
// Then A = [ 1, 4, 0, 16 ].

// Example 2:
// Let A = [ 8, 3, 5 ] be a stack.
// Pop from the stack.
// Then A = [ 8, 3 ].
```

[Home](../README.md)
