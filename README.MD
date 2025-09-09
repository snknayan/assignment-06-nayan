1. What is the difference between var, let, and const?

Ans: var is function-scoped and can be re-declared and reassigned, while let is block-scoped, cannot be re-declared, but can be reassigned. const is also block-scoped, but it cannot be reassigned or re-declared after initialization. let and const were introduced in ES6 for more predictable and modern JavaScript development, and are generally preferred over var.

2. What is the difference between map(), forEach(), and filter()?

Ans:
map()-- To transform each element in an array and create a new array containing the results of calling a provided function on every element. Return a new array with the same length as the original, where each element is the result of the callback function.

forEach()-- To execute a provided function once for each array element. It is primarily used for side effects, such as logging, modifying external variables, or performing actions that don't directly involve transforming the array itself. Return Undefined. forEach() does not return a new array or any value.

filter()-- To create a new array containing only the elements that pass a test implemented by the provided function. The callback function should return a boolean value (true to keep the element, false to discard it). Return a new array containing a subset of the original array's elements. If no elements pass the test, an empty array is returned.

3. What are arrow functions in ES6?

Ans: Arrow functions are anonymous functions. They are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. Arrow functions do not have the prototype property like this, arguments, or super. Arrow functions cannot be used with the new keyword. Arrow functions cannot be used as constructors.

4. How does destructuring assignment work in ES6?

Ans: Destructuring assignment in ES6 is a JavaScript expression that allows for unpacking values from arrays or properties from objects into distinct variables. This provides a more concise and readable way to extract and assign data compared to traditional methods. Values are extracted based on their position within the array. The syntax uses square brackets [] on the left-hand side of the assignment. Variables are declared within these brackets, corresponding to the array elements.

5. Explain template literals in ES6. How are they different from string concatenation?

Ans: Template literals are string literals that allow embedded expressions (variables) into your code. They are enclosed by backticks (`) instead of single (') or double (") quotes.It was introduced in ES6, which provides a more flexible and readable way to work with strings. Unlike traditional string concatenation, template literals simplify the process of embedding expressions, multi-line strings, and variable interpolation.

Template literals are a new feature that was introduced in ECMAScript6, which offers a simple method for performing string interpolation and multiline string creation.The template literals were called template strings before the introduction of ES6. Starting from ES6 (ECMAScript 6), we have Template Literals which are indicated by the backtick (` `) character. Template literals can also be used to hold the placeholders, that are indicated by the '$' sign and the {}  braces such as (${expression}).
