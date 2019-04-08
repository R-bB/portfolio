import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="../robert.png" alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Developer</h1>
                            <hr />
                            <p> <i class="fab fa-python"></i> Python | <i class="fab fa-java"></i> Java | <i class="fab fa-js-square"></i> Javascript | <i class="fab fa-react"></i> React.js | <i class="fas fa-database"></i> Sql | <i class="fab fa-node-js"></i> Node.js </p>        
                        </div>
                        <div className="social-links">
                                <p>
                                    <a href="https://www.linkedin.com/in/robert-boehme/" rel="noopener noreferer" target="blank"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/R-bB/" rel="noopener noreferer" target="blank"><i className="fab fa-github-square"></i></a>
                                    <a href="mailto:r.boehme@outlook.com.com"><i className="fas fa-envelope-square"></i></a>
                                </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
