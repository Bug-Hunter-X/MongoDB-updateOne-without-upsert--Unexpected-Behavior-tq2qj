# MongoDB updateOne without upsert: Unexpected Behavior
This repository demonstrates a common error when using MongoDB's `updateOne` method without setting the `upsert: true` option.  The provided code showcases the issue and its solution.

## Bug Description:
The `updateOne` method only updates existing documents. If the document doesn't exist, it does nothing, rather than inserting a new document. This can lead to issues in applications that expect `updateOne` to work like an upsert (update or insert). 

## Solution:
To fix this, set the `upsert: true` option in your `updateOne` call. This ensures that if the document doesn't exist, MongoDB inserts it. 

## How to run the code:
1.  Install MongoDB driver: `npm install mongodb`
2. Replace placeholder values in `bug.js` and `bugSolution.js` with your MongoDB connection details.
3. Run the files using Node.js: `node bug.js` and `node bugSolution.js`
