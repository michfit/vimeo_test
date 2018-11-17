import React, {Component} from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import monsoon from '../../images/monsoon.jpg';
import beams from '../../images/beams.jpg';
import bigpicture from '../../images/bigpicture.jpg';
import scroll from './scroll.css';

class Scroll extends Component {
	render() {
		return(
			<div className="Scroll" style={{ font: 'Arial'}}>
				<div className="monsoon">
					<Container fluid={true}>
						<Row>
							<Col md="6" >
								<img src={monsoon} alt=""/>
							</Col>
							<Col md="6" >
								<h2> MONSOON III</h2>
								<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
								eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
								sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="beams">
					<Container fluid={true}>
						<Row id="beams">
							<Col md="6" >
								<h2> BEAMS </h2>
								<p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
								eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
								sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
							</Col>
							<Col md="6" >
								<img id="beamsCover" src={beams} alt="" />
							</Col>
						</Row>
					</Container>
				</div>
				<div className="bigpicture">
					<Container fluid={true}>
						<Row id="bigpicture">
							<Col md="6">
								<img src={bigpicture} id="bigpictureCover" alt="" />
							</Col>
							<Col>
								<h2> Move 2 </h2>
								<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
								eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
								sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
							</Col>
						</Row>
					</Container>
				</div>

				
			</div>


			)
	}
}

export default Scroll;