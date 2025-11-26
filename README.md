# Order Number Encryption

If internal orders are numbered by year and sequence (202401, 202402,
...) and you do not want to reveal how many orders have already been
received this year, this simple CLI was created.

> [!WARNING] **Important:** The internal encryption key may **not**
> match the example keys included in the repository!

# Verwendung

1.  Install Node.js: https://www.nodejs.org/en/download/
2.  Create a project folder.
3.  Place `permutation.js` and `cli.js` into the folder.
4.  Open a terminal in that folder (`cd path`).
5.  Run the CLI:

``` console
node cli.js 202501
```

Output → `969812`

# Commands

# Befehle

``` console
node cli.js "SIX DIGIT NUMBER"
```

**Example:**

``` console
node cli.js 130902
```

Output → `490716`

------------------------------------------------------------------------

## Reverse hash

Use the `-r` argument:

``` console
node cli.js -r "SIX DIGIT NUMBER"
```

**Example:**

``` console
node cli.js -r 490716
```

Output → `130902`

------------------------------------------------------------------------

## Show version info (`-v`)

Displays the CLI version and author information:

``` console
node cli.js -v
```

Output:

    Permutation CLI version X.X.X
    Written by Fabio Bauer

------------------------------------------------------------------------

## Show project info (`-s`)

Displays GitHub repository and license information:

``` console
node cli.js -s
```

Output:

    GitHub:
    https://github.com/oibafbruh/reversable6digithash
    Licensed under MIT License. More Info under LICENSE.txt
