import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../actions";

import SingleJobCard from "./SingleJobCard";


export const HomePage = () => {

    const jobs = useSelector(state => state.jobs)
    const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getJobsAction(jobs.search))
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

export default HomePage
