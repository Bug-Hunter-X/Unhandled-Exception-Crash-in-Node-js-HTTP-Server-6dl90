# Node.js Unhandled Exception Crash

This repository demonstrates a common issue in Node.js applications: unhandled exceptions causing server crashes.  The example showcases a simple HTTP server that fails to handle errors properly, leading to immediate termination without logging or graceful shutdown.

The `bug.js` file contains the buggy code. The `bugSolution.js` file demonstrates how to implement error handling to prevent unexpected crashes and maintain server stability.