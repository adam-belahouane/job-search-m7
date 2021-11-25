import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getJobsAction } from "../actions";

import SingleJobCard from "./SingleJobCard";

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getJobs: (search) => {
        dispatch(getJobsAction(search))
    }
})

export const HomePage = ({jobs, getJobs}) => {

  useEffect(() => {
      getJobs(jobs.search)
  }, [jobs.search]);

  if (jobs.isLoading === true) {
    return <h1>loading</h1>;
  } else {
      return (
          <Container>
          <Row>

              {jobs.listOfJobs.map((job) => (
      <SingleJobCard title={job.title} company={job.company_name} />
    ))}

</Row>

</Container>

      )
       
      
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
