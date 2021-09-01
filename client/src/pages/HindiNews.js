import { 
    Container, 
    Grid,
    Paper,
    Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import {
    news
} from '../utils/Data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));


const News = ({ newsc }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4}>
            <Link to={`/view?id=${newsc.id}`} style={{ textDecoration: 'none' }}>
                <Paper className={classes.paper}>
                    <img style={{ width: '150px', height: '100px' }} alt={newsc.title} src={newsc.image} />
                </Paper>
            </Link>
        </Grid>
    )
}

const HindiNews = () => {

    const showNewsList = () => {
        return news.map((newsc) => {
          return (
            <News
                newsc={newsc}
                key={newsc.id}
            />
          );
        });
    };

    return (
        <Container maxWidth="lg">
            <Typography style={{ marginTop: '20px' }} variant="h4" component="h4" gutterBottom>
                हिंदी न्यूज़ 
            </Typography>

            <Grid container spacing={3}>
                {showNewsList()}
            </Grid>
        </Container>  
    )
}

export default HindiNews
