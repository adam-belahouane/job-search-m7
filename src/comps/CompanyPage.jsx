import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import  SingleJobCard  from "./SingleJobCard";

export const CompanyPage = () => {
  const params = useParams();

  const [company, setCompany] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchCompanyInfo = async () => {
    const request = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${params.companyId}`
    );
    if (request.ok) {
      const data = await request.json();
      console.log(data);
      setCompany(data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyInfo();
    console.log(params);
  }, []);

  return loading === true ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <Container>
        <h1>{params.companyId}</h1>
      <Row>
        {company.map((job) => (
          <SingleJobCard title={job.title} company={job.company_name} />
        ))}
      </Row>
    </Container>
  );
};
