import styled from "styled-components";
import Link from "next/link";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PaginationLink = styled.a`
padding: 2%;
  margin: 1%;
  background-color: ${(props) => !props.disabled ? 'orange' : 'lightGray'};
  pointer-events: ${(props) => !props.disabled ? 'all' : 'none'};
  cursor: ${(props) => !props.disabled ? 'pointer' : 'not-allowed'};
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const Pagination = ({ currentPage, hasMore }) => {
    return(
        <PaginationContainer>
            <Link href={`?page=${parseInt(currentPage) - 1}`} >
                <PaginationLink disabled={currentPage <= 1} >Previous</PaginationLink>
            </Link>
            <Link href={`?page=${parseInt(currentPage) + 1}`} >
                <PaginationLink disabled={!hasMore} >Next</PaginationLink>
            </Link>
        </PaginationContainer>
    )
}

export default Pagination;