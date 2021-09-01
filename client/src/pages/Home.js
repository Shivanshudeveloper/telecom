import { 
    Container, 
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    categories
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


const CategoryList = ({ category }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={3}>
            <Link to={`/${category.link}`} style={{ textDecoration: 'none' }}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" component="h4" style={{ color: '#ffffff' }}>
                        {category.title}
                    </Typography>
                    <Typography variant="h6" component="h6" style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
                        LIVE
                    </Typography>
                </Paper>
            </Link>
        </Grid>
    )
}

const Home = () => {

    const showCategoriesList = () => {
        return categories.map((category) => {
          return (
            <CategoryList
                category={category}
                key={category.id}
            />
          );
        });
    };
    return (
        <Container maxWidth="lg">
            <Typography style={{ marginTop: '20px' }} variant="h4" component="h4" gutterBottom>
                Categories
            </Typography>
            <Grid container spacing={3}>
                {showCategoriesList()}
            </Grid>
        </Container>            
    )
}

export default Home