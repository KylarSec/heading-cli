# heading-cli

A simple CLI tool that generates clean section headings for code.

## Installation

Install directly from GitHub:

```bash
npm install -g github:KylarSec/heading-cli
```

## Usage

Run:

```bash
heading "Example Heading"
```

Output:

```js
// ======================================================================
// ---------------------------- EXAMPLE HEADING -------------------------
// ======================================================================
```

You can use it with any heading:

```bash
heading "Object Destructuring"
heading "Functions"
heading "JavaScript Engine"
```

## How It Works

The CLI takes the heading you provide as a command-line argument and automatically:

- Converts it to uppercase
- Centers it between dashes
- Adds `//` comment syntax
- Keeps the heading at a fixed width

## Requirements

- Node.js
- npm

## Repository

[GitHub Repository](https://github.com/KylarSec/heading-cli)
