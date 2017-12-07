#!/usr/bin/env node

const findAnagrams = require('find-anagrams');
const meow = require('meow');
const Ora = require('ora');
const openFile = require('./src/open-file');

const cli = meow(
    `
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
            csv: {
                type: 'boolean',
                alias: 'c',
            },
        },
    }
);

const word = cli.input[0];

const { file, json, csv } = cli.flags;

const spinner = new Ora({
    text: 'Searching for words..',
    color: 'yellow'
}).start();

(async function main() {
    if (!word) {
        spinner.fail('Please provide a search word!');

        process.exit(1);
    }

    if (!file) {
        spinner.fail('Please provide a dictionary!');

        process.exit(1);
    }

    const data = await openFile(file);

    const words = data.replace('\r').split('\n');

    const anagrams = findAnagrams(words, word);

    if (!anagrams.length) {
        spinner.fail('No anagrams found..');

        process.exit(1);
    }

    spinner.stop();

    if (json) {
        const toJson = JSON.stringify({ word, anagrams, count: anagrams.length }, 0, 2);

        console.log(toJson);
    } else if (csv) {
        console.log(anagrams.join(', '));
    } else {
        console.log(anagrams.join('\n'));
    }
})();