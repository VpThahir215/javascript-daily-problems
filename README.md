# 🚀 Daily Edabit JavaScript Challenges

Welcome to my daily coding log! This repository tracks my journey of building consistency, strengthening my problem-solving reflexes, and mastering modern **JavaScript (ES6+)** through platform exercises and core algorithmic challenges.

---

## 📅 Progress Tracker

| Timeline | Challenges Solved | Key Concepts Covered | Code Artifacts |
| :--- | :--- | :--- | :--- |
| **Day 1** | • Get First Array Value<br>• Addition Subroutine<br>• Hours to Seconds Converter<br>• Electrical Circuit Power<br>• Correcting Syntax Errors<br>• Minutes to Seconds | • Array Indexing (`arr[0]`)<br>• Arithmetic operators<br>• Unit conversions<br>
| **Day 2** | • The "Seven Boom!" Search<br>• Debugging Infinite Loops | • Array search methods (`.includes()`)<br>• Typecasting (`.toString()`)
| **Day 3** | • Largest of Three Numbers<br>• Even / Odd Checker<br>• Aggressive Summation (1–100)<br>• Factorial Loop Calculations<br>• String Reversal Manual Loop<br>• Regex-less Vowel Counter<br>• Diamond Mirror Pattern | • Logical operators (`&`) / Conditionals<br>• Accumulator pattern variables<br>• String processing

---

## 💡 Key Conceptual Discoveries

### Day 1 Highlights: Clean Multipliers
Instead of doing manual variable steps to calculate time conversions, learned to map parameters instantly to absolute numerical values to save execution time:
```javascript
function howManySeconds(hours) {
    return hours * 60 * 60; // Clean baseline calculation
}
