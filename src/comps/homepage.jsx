import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { SingleJobCard } from "./SingleJobCard";

export const HomePage = ({search}) => {
  const [jobs, setJobs] = useState(null);

  

  const fetchJobs = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(Object.values(data.data));
        setJobs(Object.values(data.data));
        console.log(data.title);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [search]);

  if (jobs === null) {
    return <h1>loading</h1>;
  } else {
      return (
          <Container>
          <Row>

              {jobs.map((job) => (
      <SingleJobCard title={job.title} company={job.company_name} />
    ))}

</Row>

</Container>

      )
       
      
  }
};
