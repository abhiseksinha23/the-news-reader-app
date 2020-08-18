import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';
import NewsCards from './comopnents/NewsCards/NewCards';
import useStyles from './styles';

const alanKey = '58d3b466c51c6ae03444a70d5b8a5b7a2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
const [newsArticles,setNewsArticles] = useState([]);
const [activeArticle, setActiveArticle] = useState(-1);
const classes=useStyles();
 useEffect(() => {
   alanBtn({
     key: alanKey,
     onCommand: ({command,articles,number}) =>
     {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        }else if(command === 'highlight')
        {
          setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
        } else if(command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true}) : number;
          const article = articles[parsedNumber - 1];

          if(parsedNumber > 20) {
            alanBtn().playText('pleas try that again.')
          } else if(article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          }




        }
     }
   })
 },[])


  return(
    <div>
      <div className={classes.logoContainer}>
        <h1 style={{fontSize:30}}><u>THE NEWS READER - An AI based web application</u></h1>
      </div>
  <h1  style={{textAlign: 'center'}}>Find all the latest news or find the news based on different terms or from different sources or based on categories.</h1>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <div style={{textAlign: 'center'}}>
        <h3>Developed by:- <a href="https://abhiseksinha23.github.io/portfolio/" target="_blank"><span style={{fontSize:26}}>ABHISEK KUMAR</span></a> | &#169;2020 | All rights reserved |

        </h3>
      </div>
    </div>

  );
}

export default App;
