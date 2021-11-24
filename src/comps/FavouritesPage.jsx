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
    console.log(favourites);
  }, []);

  if (favourites) {
    return (
      <Container>
        <Row>
          
          {favourites.map((company) => (
            <CompanyCard company={company} />
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>No Favourites Found</h1>
      </Container>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);
