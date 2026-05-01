# WORDLY DICTIONARY APP
## Description of the app
A web-based dictionary app that allows users to search for a word definitions, phonetics, and meanings using the Free Dictonary API.
## Features implemented
- Searching for an English Word.
- Displaying word definitions and meanings.
- Showing the phonetic pronunciation.
- Audio pronunciation playback has been implemented.
- Error handling techniques when the words are not found.

## How to run the project
 1. By forking and cloning the repository to your local machine to be able to have access.
 2. Open the project folder.
 3. Navigate to the index.html file in your browser.
## Technologies used
- I have used HTML to potray the structure of our webpage as well as implimenting a form and a button for submittion upon searching for a given word.
- I have also used CSS for styling the Single Page Application to make it more presentable to the users.
- Lastly i have used various JavaSCript functions to make the Single Page Application interactive and as well as implementing an API to be able to request data based on the word being searched for and whether it has synonyms and antonyms.
- I have used methods of acquiring elements from a webpage by using getElementById() which selects the specified element written.
- I have used the fetch() function to be able to request data from the given API with the URL implemented in it.
- I have implemented the built in method called addEventListener in the search form which is responsible for operating when events take place within the webpage.
- The response.json() is also implemented which is used to convert the raw HTTP response into a JavaScript object which is actually usable.
- The .then() runs code after a promise completes. Since fetching from an API takes time .then() waits for it to finish, then runs the next step.
- .catch() has been used to handle errors in a Promise chain.
## License
Copyright (c) [2026] [Regan Njeru]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



