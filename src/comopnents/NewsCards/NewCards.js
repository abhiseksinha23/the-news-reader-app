import  React from 'react';
import {Grid,Grow, Typography} from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';

//import classes from '*.module.css';

const infoCards = [
    { color: '#00838f', title: 'Latest News', info: 'Indian News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest "<Category eg:-Technology>" news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with "<term eg:-PlayStation 5>"' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from  "<source\'s name eg:-CNN>"' },
  ];

const NewsCards = ({articles, activeArticle}) => {
    const classes= useStyles();


   if(!articles.length){
       return (
         <>
           <h3 style={{textAlign: 'center'}}>Use the mic button for the conversation.</h3>
         <h4 style={{textAlign: 'center'}}>Read the cards for instructions.Say "Go back" to get back to the place.</h4>
        <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard) => (
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                 <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                  <Typography variant="h5">{infoCard.title}</Typography>
                  {infoCard.info ? (<Typography variant="h6">
                      <strong>
                         {infoCard.title.split(' ')[2]?infoCard.title.split(' ')[2]:infoCard.title}:
                      </strong>
                      <br />
                      {infoCard.info}
                  </Typography>) : null}
                  <Typography variant="h6">Try Saying: <br /><i>{infoCard.text}</i></Typography>
                 </div>
               </Grid>
            ))}

         </Grid>
        </Grow>
        </>
       );
   }

    return(
      <>
      <h3 style={{textAlign: 'center'}}>To open any article ask "open the article x or number x"</h3>
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>

            {articles.map((article,i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                 <NewsCard article={article} activeArticle={activeArticle} i={i} />
                 </Grid>
            ))}
           </Grid>
        </Grow>
        </>
    );
}

export default NewsCards;
