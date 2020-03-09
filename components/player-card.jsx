import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PlayerCard = (props) => {
	const { playerName, vitality, magic, power, defence, ph, urlImage } = props.playerData;
  	return (
	    <Card>
	        <CardImg top height="300px" width="40px" src={urlImage} alt="Card image cap" />
	        <CardBody>
	          <CardTitle><b>{playerName}</b></CardTitle>
	          <CardText>
	          	<p>Vitality: {vitality}</p>
	          	<p>Magic: {magic}</p>
	          	<p>Power: {power}</p>
	          	<p>Defence: {defence}</p>
	          	<p>PH: {ph}</p>
	          </CardText>
	        </CardBody>
	    </Card>
  	);
};

export default PlayerCard;