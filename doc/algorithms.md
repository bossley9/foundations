# Algorithms

Combining data structures with the principles of mathematics, we can create a predictable set of procedural instructions called algorithms to view and control our data.

## Table Of Contents

1. [Sorting Algorithms](#sorting-algorithms)
   1. [Asymptotic Analysis](#asymptotic-analysis)
   2. [Quicksort](#quicksort)
   3. [Mergesort](#mergesort)
   4. [Insertion Sort](#insertion-sort)

## Sorting Algorithms

### Asymptotic Analysis

| Algorithm      | Worst (O) | Average (Theta) | Best (Omega) | Worst (O) [Space Complexity] |
| -------------- | :-------: | :-------------: | :----------: | :--------------------------: |
| Quicksort      |    n^2    |      nlogn      |    nlogn     |             logn             |
| Mergesort      |   nlogn   |      nlogn      |    nlogn     |              n               |
| Insertion Sort |    n^2    |       n^2       |      n       |              1               |

### [Quicksort](../examples/sorting/quicksort.ts)

Quicksort is an algorithm which divides the array in which it operates on into smaller parts, then recursively sorts each part before merging each back together. In this respect, it is similar to Mergesort. On a high level, it first finds an arbitrary element in the array, called the `pivot`. It positions each of the remaining elements in the array relative to the pivot such that the elements smaller than the pivot are to the left of the pivot and elements larger than the pivot are to the right. This process is then performed recursively for the smaller halves to the left and right of the pivot.

The most important part of the quicksort algorithm is choosing the pivot, as this effectively determines the efficiency of the algorithm. A well-balanced pivot with a similar amount of items to the left and right of it will perform less overall computations than one which has a majority of elements on one side of the pivot. A few methods for selecting a pivot are as follows:

1. Select the first element as the pivot.
2. Select the last element as the pivot.
3. Select an arbitrary element as the pivot.
4. Select the median as the pivot.

However, methods 1 and 2 are preferred to methods 3 and 4 since they objectively require less computation or extensive conditional logic.

### [Mergesort](../examples/sorting/mergesort.ts)

Mergesort recursively divides the array into equal halves until the array is broken into single elements. These elements are then merged together in the same order they were taken apart, with each smaller element array being sorted into each other. The final result is a completely joint sorted array.

Although mergesort may have better worst-case asymptotic behavior than [quicksort](#quicksort), it uses more space than quicksort, as indicated by the [asymptotic analysis](#sorting-algorithms-asymptotic-analysis) table. In actual practice, quicksort's worst-case scenario is hardly ever encountered, and therefore is used as the default sorting algorithm in most programming languages in some variation.

### [Insertion Sort](../examples/sorting/insertion-sort.ts)

Insertion Sort loops through each element and in a series of element swaps, moves each element from right to left until it is placed in the correct position. This algorithm sorts the array as you move to each element.

Generally, this algorithm is inefficient and poor in practice.

[Home](../README.md)
