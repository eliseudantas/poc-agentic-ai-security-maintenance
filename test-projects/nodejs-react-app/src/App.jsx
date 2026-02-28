import React from "react";
import pkg from "../package.json";

export default function App() {
   // This is intentionally vulnerable to test code scanning tools. 
   const userInput = new URLSearchParams(window.location.search).get("msg");

  return (
    <main className="app">
      <h1>Node.js React App</h1>
      <section>
        <h2>Node version</h2>
        <p>{pkg.engines?.node ?? "Not specified"}</p>
      </section>
      <section>
        <h2>Package versions</h2>
        <ul>
          {Object.entries(pkg.dependencies ?? {}).map(([name, version]) => (
            <li key={name}>
              {name}: {version}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
