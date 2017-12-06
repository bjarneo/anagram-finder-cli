const findAnagrams = require('find-anagrams');
const meow = require('meow');
const openFile = require('./src/open-file');

const cli = meow(
    `
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
`,
    {
        flags: {
            file: {
                type: 'string',
                alias: 'f',
            },
            json: {
                type: 'boolean',
                alias: 'j',
            },
        },
    }
);

const word = cli.input[0];

const { file, json } = cli.flags;

(async function main() {
    if (!word) {
        console.error('Please provide a search word!');

        return;
    }

    const data = await openFile(file);

    const words = data.replace('\r').split('\n');

    const anagrams = findAnagrams(words, word);

    if (json) {
        const toJson = JSON.stringify({ word, anagrams }, 0, 2);

        console.log(toJson);
    } else {
        // CSV format
        console.log(anagrams.join(', '));
    }
})();