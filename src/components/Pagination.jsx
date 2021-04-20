import React from "react";
import styled from "styled-components";

const Pagination = ({ prevURL, nextURL, fetchData }) => {
  return (
    <Wrapper>
      {prevURL == null ? (
        <button
          className="btn-page"
          disabled
          onClick={() => fetchData(prevURL)}
        >
          Previous
        </button>
      ) : (
        <button className="btn-page" onClick={() => fetchData(prevURL)}>
          Previous
        </button>
      )}
      {nextURL == null ? (
        <button
          className="btn-page"
          disabled
          onClick={() => fetchData(nextURL)}
        >
          Next
        </button>
      ) : (
        <button className="btn-page" onClick={() => fetchData(nextURL)}>
          Next
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-page {
    text-transform: uppercase;
    background: rgba(5, 73, 121, 0.6);
    border-color: transparent;
    color: #fff;
    margin: 0.3rem 1rem;
    padding: 0.3rem;
    font-family: "Open Sans";
    font-weight: 400;
  }

  .btn-page:disabled {
    color: #49586b;
  }

  @media (min-width: 992px) {
    .btn-page {
      margin: 0.5rem 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export default Pagination;
