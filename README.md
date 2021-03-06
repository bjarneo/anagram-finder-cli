anagram finder cli
======

What is this?
------
This CLI makes it possible to search for anagrams from a provided dictionary file. Dictionary must have one word each line, see example.

Installation
------
It's available on npm.
```
npm install -g anagram-finder-cli
```

Usage
------
Example words.txt file.
```js
listen
word
dog
laugh
elints
enlist
inlets
javascript
slinte
silent
nodejs
tinsel
```

Usage
```bash
    Usage
      $ ana <word> --file words.txt --json

    Options
      --file, -f  The dictionary to search for anagrams
      --json, -j  Output to json
      --csv,  -c  Output to csv

    Examples
      $ ana silent --file words.txt --json
      {
        "word": "listen",
        "anagrams": [
          "listen",
          "elints",
          "enlist",
          "inlets",
          "silent",
          "slinte",
          "tinsel"
        ],
        "count": 7
      }
```

Dictionaries
------
Feel free to add your dictionary

* [English](https://github.com/dwyl/english-words)
* [Norwegian](https://github.com/0301/ordliste)

Contribution
------
Contributions are appreciated.

License
------
MIT licensed. See LICENSE.
