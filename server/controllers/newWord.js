const fetch = require('node-fetch');

//npm install node-fetch
//npm install node-fetch@2

const newWord = {};

newWord.getNewWord = (req, res, next) => {
  const callApi = () => {
    fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en')
      .then((res) => res.json())
      .then((data) => {
        let word = data[0];
        console.log('this is word', word);
        if (word[4] === 's') return callApi();
        res.locals.newWord = word;
        console.log('inside data', res.locals.newWord);
        return next();
      })
      .catch((err) => console.log('api error'));
  };
  callApi();
};

module.exports = newWord;
