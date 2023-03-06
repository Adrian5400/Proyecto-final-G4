import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Carta() {
    return (
<Card style={{ width: '10rem' }}>
<Card.Img variant="top" src="http://via.placeholder.com/100x100" />
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
    );
}

export default Carta;

