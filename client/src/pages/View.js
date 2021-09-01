import { 
    Container, 
    Typography,
    Button
} from '@material-ui/core';
import { Player, Hls } from '@vime/react';
import {
    news
} from '../utils/Data';
import '@vime/core/themes/default.css';

const View = ({ location }) => {
    const hlsConfig = {
    
    };
    const urlParams = new URLSearchParams(location.search);
    let id = Number(urlParams.get('id'));
    let newsinfo = news.filter(n => n.id === id);
    console.log(newsinfo);
    return (
        <Container maxWidth="lg">
            <Button href="/hindinews" style={{ float: 'right' }}>
                Back
            </Button>
            <Typography style={{ marginTop: '20px' }} variant="h4" component="h4" gutterBottom>
                {newsinfo[0].title}
            </Typography>
            
            {
                newsinfo[0].videotype === "m3u8" ? (
                    <Player fullWidth controls>
                        <Hls version="latest" config={hlsConfig} poster="/media/poster.png">
                            <source data-src={newsinfo[0].link} type="application/x-mpegURL" />
                        </Hls>
                    </Player>
                ) : (
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="responsive-iframe" title="News" src={newsinfo[0].link} allowfullscreen></iframe>
                    </div>
                )
            }
        </Container>  
    )
}

export default View
