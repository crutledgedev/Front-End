import React from 'react';
import Styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const ContentContainer = Styled.div`
  max-width: 60%;
  margin: 0 auto;
  font-size: 1.5rem;
`;
const Descriptor = Styled.p`
font-size: 1.2rem;
`;

const PhotoCard = (props) => {
  return (
    <ContentContainer>
      <Card>
        <CardBody>
          <CardTitle>{props.title} </CardTitle>
        </CardBody>
        <img width="100%" src={props.picture} alt="Astronomy Picture" />
        <CardBody>
        <CardSubtitle>Copyright: {props.credit}, {props.date}</CardSubtitle>
          <Descriptor>{props.description}</Descriptor>
          <CardLink href="https://apod.nasa.gov/apod/archivepix.html">APoD Archive</CardLink>
          <CardLink href="https://hubblesite.org/">HubbleSite.org</CardLink>
        </CardBody>
      </Card>
    </ContentContainer>
  );
};

export default PhotoCard;