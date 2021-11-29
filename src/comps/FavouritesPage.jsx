import { Container, Row } from "react-bootstrap";
import  CompanyCard  from "./CompanyCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites.content)
  useEffect(() => {
    console.log(favourites.length);
  }, []);

  if (favourites.length === 0) {
    return (
        <Container>
        <h1>No Favourites Found</h1>
      </Container>
    );
  } else {
    return (
        <Container>
            <Row className="justify-content-center" ><h1>Favourites</h1></Row>
        <Row>
          
          {favourites.map((company) => (
            <CompanyCard company={company} />
          ))}
        </Row>
      </Container>
    );
  }
};

export default FavouritesPage;
