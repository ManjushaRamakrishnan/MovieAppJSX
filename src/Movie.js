import React, { Component } from 'react';
import Grid from  '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  gridContainer: {
    marginTop : "10px"
  },
  media: {
    height: 0,
    paddingTop: '100%',
  }
};

class Movie extends Component {

render() {
    return (
      <Grid container spacing={24} style={styles.gridContainer} >
         { this.props.movies.map( n => 
         <Grid key={n.id} item sm={3} >
          <Card style={styles.card}>
            <CardMedia style={styles.media}
              image={`http://image.tmdb.org/t/p/w185/${n.poster_path}`}
              title= {n.title}
            />
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {n.title}  
            </Typography>
            <Typography component="p">
              Popularity : {n.popularity}
            </Typography>
            <Typography component="p">
              Votes : {n.vote_count}
            </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
      </Grid>
    );
  }
}

export default Movie;
