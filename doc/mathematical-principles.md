# Mathematical Principles

Computer science is founded in its entirety on mathematical principles and logical proofs. Let's examine these in detail.

## Table of Contents

1. [Propositions and Predicates](#1-propositions-and-predicates)
2. [Quantifiers](#2-quantifiers)
3. [Conditional Logic](#3-conditional-logic)
4. [Special Expressions](#4-special-expressions)
5. [Identities and Laws](#5-identities-and-laws)
6. [Proofs](#6-proofs)

## 1. Propositions and Predicates

In computer science, all logic is compromised of true or false values corresponding to 0 or 1. A **proposition** is a declarative statement that has a truth value of either true or false, but cannot be both and cannot be neither.

```ts
// Example 1: "I walked to the store last night."

// Example 2: "Every student knows how to ride a bike."

// Non-example 1: "Who are you?"
```

A **predicate** is a proposition whose truth value depends on one or more variables.

```ts
// Example 1: "Ax: x is tall."

// Example 2: "P(x, y) denotes x + y > 3".
```

## 2. Quantifiers

Predicate variables with no restrictions or domain are considered **free** in the sense that any value can be used. In practice, however, we generally use quantifiers to restrict the values to a specific subset where the predicate will always evaluate to true. Predicate variables restricted by a quantifier are considered **bound** variables.

There are two quantifiers we apply to predicates: universal and existential.

The **universal quantifier, ∀**, asserts within a predicate that every variable value within the specified domain will make the predicate true. When writing quantifiers, we use the set inclusion operator ∈ to denote a single value from a variable domain.

```ts
// Example 1: (∀x∈R)[x^2 >= 0]

// Example 2: "Every student is enrolled in a class."
```

The **existential quantifier, ∃**, asserts within a predicate that at least one variable value within the specified domain will make the predicate true.

```ts
// Example 1: (∃y∈R)[x^2 = 16]

// Example 2: "There exists a student who has failed a class."
```

## 3. Conditional Logic

We can conjoin multiple propositions into complex truth statements using conditional logic operators.

The **not operator, ¬**, negates an operand.

| P | ¬P |
| --- | --- |
| T | F |
| F | T |

```ts
// Example:
// Let X be the sentence "The sky is blue".
// Then ¬X must be the sentence "The sky is not blue".
```

The **and operator, ∧**, specifies that both the operand before and after the operator must be true for the expression to be true.

| P | Q | P∧Q |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

```ts
// Example:
// Let A be the sentence "The sky is blue" and B be the sentence "Grass is green".
// Then A∧B must be the sentence "The sky is blue and grass is green".
```

The **or operator, ∨**, specifies that either the operand before or after the operator must be true for the expression to be true. This operation is not exclusive - both can be true.

| P | Q | P∨Q |
| --- | --- | --- |
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

```ts
// Example:
// Let A be the sentence "The sky is blue" and B be the sentence "Grass is green".
// Then A∨B must be the sentence "The sky is blue or grass is green".
```

The **xor (exclusive or) operator, ⊕**, specifies that either the operand before or after the operator must be true for the expression to be true, but both cannot be true.

| P | Q | P⊕Q |
| --- | --- | --- |
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | F |

```ts
// Example:
// Let A be the sentence "I passed my exam" and B be the sentence "I failed my exam".
// Then A⊕B must be the sentence "I passed my exam or I failed my exam".
```

The **implication operator, `=>`**, specifies that one operand leads to another. If we have the expression `P => Q`, it is said that P "implies" Q.

The terms **necessary** and **sufficient** are used to describe implication. In the above expression, we can say Q is **necessary** for P because it is impossible to have P without having Q. Similarly, we can say P is **sufficient** for Q because P being true implies that Q is true, but P not being true does not guarantee Q is true.

| P | Q | `P => Q` |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

```ts
// Example 1:
// Let A be the sentence "I graduated" and B be the sentence "I passed all my required classes".
// Then "A implies B" is true.

// Example 2:
// Let X be the sentence "It is snowing" and Y be the sentence "It is cold outside".
// Then "if X then Y" is true.

// Example 3:
// Let H => K.
// Suppose H is true.
// Then K must be true.
```

The **biconditional operator, `<=>`**, specifies that two operands are directly related to each other. If we have the expression `P <=> Q`, it is said that P "if and only if" Q. This means Q will always be true when P is true, and false when P is false. The same applies both ways.

| P | Q | `P <=> Q` |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

```ts
// Example:
// Let A be the sentence "Today is Halloween" and B be the sentence "Today is October 31st".
// Then "A if and only if B" is true.
```

The order of operations is important when evaluating expressions. Below is the order of operations from highest priority (left) to least priority (right).

```
¬ ∀ ∃ ∧ ⊕ ∨ => <=>
```

It is important to note that ∀ and ∃ are commutative respectively.

## 4. Special Expressions

There are a few special expressions we acknowledge by name. These expressions are particularly useful in proofs which we will discuss later.

A **tautology** is a predicate that always evaluates to true.

```ts
// Example:
// A∨¬A will always be true.
```

A **contradiction** is a predicate that always evaluates to false.

```ts
// Example:
// A∧¬A will always be false.
```

A **contingency** is a predicate that is entirely dependent on variables.

```ts
// Example:
// A∧A will always be dependent on the value of A.
```

## 5. Identities and Laws

De Morgan's Laws can be used to simplify mathematical expressions:

```ts
// De Morgan's Law of Union:
// ¬(A ∨ B) ≡ ¬A ∧ ¬B

// De Morgan's Law of Intersection:
// ¬(A ∧ B) ≡ ¬A ∨ ¬B
```

Additionally, the following identities derived from De Morgan's Laws prove helpful in rearranging expressions further:

```ts
// P => Q ≡ ¬P ∨ Q
// P => Q ≡ ¬Q => ¬P
```

## 6. Proofs

Mathematical proofs are the ways in which we logically state conclusions based on mathematical expressions and inference, often employing the properties and techniques described above. Proofs draw conclusions and create definitions we can use. There are different kinds of definitions we employ:

* an **axiom** is a statement which is taken as self-evident without further question. There is no need to prove an axiom. For example, "things which are equal to the same thing are equal to one another" can be considered an axiom.
* a **theorem** is a proven proposition using axioms and existing knowns.
* a **lemma** is a proven proposition similar to a theorem but generally used in the context of smaller stepping stones to discover a bigger theorem.
* a **corollary** is a theorem that follows as the result of another theorem.
* a **law** usually refers to a common axiom but can also refer to a theorem or common formula.

There are three main types of proofs:

1. A **direct** proof is a proof that draws a conclusion based on combining known definitions, laws, and axioms.
    ```ts
    // Example:
    // Prove without using De Morgan's Laws that ¬(P ∨ Q) is logically equivalent to ¬P ∧ ¬Q.

    // Suppose that ¬(P ∨ Q) is true.
    // Then P ∨ Q must be false.
    // So both P and Q must be false.
    // Then both ¬P and ¬Q must be true.
    // Therefore, ¬P ∧ ¬Q is true.

    // Conversely, suppose that ¬P ∧ ¬Q is true.
    // Then both ¬P and ¬Q must be true.
    // So P and Q must both be false.
    // Then P ∨ Q is false.
    // So ¬(P ∨ Q) must be true.
    // So ¬(P ∨ Q) must be logically equivalent to ¬P ∧ ¬Q.
    ```
2. An **induction** proof is a proof that declares the validity of a base case, the validity of any (n+1)th case (called the "inductive step"), then draws a conclusion regarding all values of n combining those two observations.
    ```ts
    // Example:
    // Prove by induction that for each natural number n, we have
    // 1 + 2 + ... + n = n(n+1) / 2.

    // Proof by induction:
    // Let P(n) be the sentence "1 + 2 + ... + n = n(n+1) / 2".

    // Base case:
    // Observe P(1) is true since 1 = 1(1+1) / 2 = 1(2) / 2 = 1.

    // Inductive step:
    // Consider an n∈N such that P(n) is true.
    // Then P(n+1) is "1 + 2 + ... + n + (n+1) = (n+1)[(n+1)+1] / 2".
    // By the inductive hypothesis,
    // 1 + 2 + ... + n + (n+1) = [n(n+1) / 2] + (n + 1)
    //   = [(n^2 + n) / 2] + [2(n+1) / 2]
    //   = (n^2 + n + 2n + 2) / 2
    //   = (n^2 + 3n + 2) / 2
    //   = (n+1)(n+2) / 2
    //   = (n+1)[(n+1)+1] / 2
    // So P(n+1) is true.

    // Conclusion:
    // By induction, 1 + 2 + ... + n = n(n+1) / 2 ∀n∈N.
    ```
3. A **contradiction** proof is a proof that draws a conclusion by proving that the inverse of the given proof is impossible by design.
    ```ts
    // Prove that there are infinitely many prime numbers.
    // By definition, a prime number p is a positive integer > 1
    // whose only two factors are 1 and p.
    // In addition, according to the fundamental theorem of arithmetic,
    // any integer above 1 is either a prime number or can be made by multiplying primes together.
    // Note: The phrase "z|x" reads as "z divides x".

    // Suppose there are finitely many prime numbers called P_1, P_2, P_3, ..., P_n.
    // Let x = P_1 * P_2 * P_3 * ... * P_(n-1) * P_n be the product of all primes.
    // Consider the number y = x + 1.

    // We know y∈N and y != 1, and we know there exists a prime q such that q|y.
    // Since we have listed all the primes, q must be one of the listed primes where q = P_i for some i.
    // So q|x and q|y, meaning q|y-x, but y-x=1.
    // So q|1.
    // Contradiction, q cannot divide 1 because q is prime and must be greater than 1.
    // Therefore, there must be infinitely many prime numbers.
    ```

[Home](../README.md)
