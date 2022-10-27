# Mathematical Principles

Computer science is founded in its entirety on mathematical principles and logical proofs. Let's examine these in detail.

## Table of Contents

1. [Propositions and Predicates](#1-propositions-and-predicates)
2. [Quantifiers](#2-quantifiers)

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
