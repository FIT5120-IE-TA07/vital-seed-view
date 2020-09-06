import React from 'react';
import Navigation from './components/Navigation';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Layout from './components/Layout';

export default function Events() {
    return (
        // <Layout>
        <div className="main">
            <Navigation />
            <div className="container2">
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={4}>
                        <Paper className="paper">
                        <h2 className="paperContent">What are Contraceptives and why one should use them?</h2>
                            <br />
                            <Button variant="contained" color="secondary" href="/">
                                Learn more
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className="paper" style={{ backgroundImage: `url('/public/girl1.jpg')` }}>
                        <h2 className="paperContent">What are the top 5 reasons of rise in STD infection rate?</h2>
                            <br />
                            <Button variant="contained" color="secondary" href="https://www.sexandu.ca ">
                                Learn more
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className="paper">
                        <h2 className="paperContent">What is sex and ways to safe sex?</h2>
                            <br />
                            <Button variant="contained" color="secondary" href="/">
                                Learn more
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className="container3">
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6} style={{ backgroundImage: `url('/public/girl1.jpg')` }}>
                        <Paper className="paper">
                            <h2 className="paperContent">How safe is your sex?
                            <br/><br/>
                            Let's check here...</h2>
                            <Button variant="contained" color="secondary" href="/">
                                Let's start
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className="paper">
                            <h2 className="paperContent">How well do you know about STDs?
                            <br/><br/>
                            Take this short quiz</h2>
                            
                            <Button variant="contained" color="secondary" href="/">
                                Let's start
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
         //</Layout> 
    );
}