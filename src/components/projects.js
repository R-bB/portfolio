import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardText, CardMenu, Button,IconButton } from 'react-mdl'; 


class Projects extends Component {
    render() {
        return(
            <div>
                <h1>Projects</h1>
                <div  className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:'url(../To-Do.png)'}} >React To-Do App</CardTitle>
                            <CardText>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <hr></hr>
                                <div className="project-links">
                                    <a href="https://github.com/R-bB/To-Do-App"><i className="fab fa-github-square"></i> GitHub</a>
                                    <a href="https://to-do-app-684f2.firebaseapp.com/">Live Demo</a>
                                </div>
                            </CardText>
                        </Card>
                        {/* Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                            <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </CardText>
                            <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Project 3 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                            <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </CardText>
                            <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
            </div>
        )
    }
}

export default Projects;
