import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";


export const SingleJobCard = ({ title, company }) => {

    const navigate = useNavigate()


  return (
      <Col onClick={() => navigate(`/${company}`)} sm={6} className="my-2">
    <Card onc border="secondary">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{company}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};
