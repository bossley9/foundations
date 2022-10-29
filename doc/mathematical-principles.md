# Mathematical Principles

Computer science is founded in its entirety on mathematical principles and logical proofs. Let's examine these in detail.

## Table of Contents

1. [Propositions and Predicates](#1-propositions-and-predicates)
2. [Quantifiers](#2-quantifiers)
3. [Conditional Logic](#3-conditional-logic)

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

The **implication connective operator, `=>`**, specifies that one operand leads to another. If we have the expression `P => Q`, it is said that P "implies" Q.

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

The **biconditional connective operator, `<=>`**, specifies that two operands are directly related to each other. If we have the expression `P <=> Q`, it is said that P "if and only if" Q. This means Q will always be true when P is true, and false when P is false. The same applies both ways.

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
