anagram finder cli
======
![Travis](https://travis-ci.org/bjarneo/anagram-finder-cli.svg?branch=master)

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
        ]
    }

```

Dictionaries
------
Feel free to add your dictionary

* [English](https://github.com/dwyl/english-words)
* [Norwegian](https://github.com/0301/ordliste)

Test
------
```bash
$ npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT licensed. See LICENSE.
