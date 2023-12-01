/* eslint-disable react/prop-types */
// Get rid of everything in Container in line 12
// use .map to display HornedBeast from props.data(data.json)
/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from "./HornedBeast";
import React, { useState } from "react";
function Gallery(props) {
    return (
        <>
            <h2>{props.message}</h2>
            <Container>
                <Row>
                    <Col>
                        <HornedBeast title={props.imageUrls[0].title} image_url={props.imageUrls[0].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[1].title} image_url={props.imageUrls[1].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[2].title} image_url={props.imageUrls[2].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[3].title} image_url={props.imageUrls[3].image_url} displayModal={props.displayModal} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HornedBeast title={props.imageUrls[12].title} image_url={props.imageUrls[12].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[13].title} image_url={props.imageUrls[13].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[14].title} image_url={props.imageUrls[14].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[15].title} image_url={props.imageUrls[15].image_url} displayModal={props.displayModal} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HornedBeast title={props.imageUrls[16].title} image_url={props.imageUrls[16].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[17].title} image_url={props.imageUrls[17].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[18].title} image_url={props.imageUrls[18].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[19].title} image_url={props.imageUrls[19].image_url} displayModal={props.displayModal} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HornedBeast title={props.imageUrls[4].title} image_url={props.imageUrls[4].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[5].title} image_url={props.imageUrls[5].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[6].title} image_url={props.imageUrls[6].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[7].title} image_url={props.imageUrls[7].image_url} displayModal={props.displayModal} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HornedBeast title={props.imageUrls[8].title} image_url={props.imageUrls[8].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[9].title} image_url={props.imageUrls[9].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[10].title} image_url={props.imageUrls[10].image_url} displayModal={props.displayModal} />
                    </Col>
                    <Col>
                        <HornedBeast title={props.imageUrls[11].title} image_url={props.imageUrls[11].image_url} displayModal={props.displayModal} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Gallery;