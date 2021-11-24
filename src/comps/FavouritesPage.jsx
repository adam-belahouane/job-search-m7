import { Container, Row } from "react-bootstrap";
import  CompanyCard  from "./CompanyCard";
import { connect } from "react-redux";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
} from "../actions/index.js";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  favourites: state.favourites.content,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (companyToAdd) => {
    dispatch(addToFavouritesAction(companyToAdd));
  },
  removeFromFav: (indexToRemove) => {
    dispatch(removeFromFavouritesAction(indexToRemove));
  },
});

export const FavouritesPage = ({ favourites }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);
