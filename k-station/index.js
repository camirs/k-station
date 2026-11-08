

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('373c1693433e421397a5f85da33413de')



    
newsapi.v2.topHeadlines({
    "source": {
       "id": "globo",
     "name": "Globo"
    },
    q: '',
    category: 'technology',
    language: 'pt',
    country: 'br'
  }).then(response => {
    console.log(response) })
    




