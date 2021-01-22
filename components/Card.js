import styled from "styled-components";

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background-color: lightgrey;
  border-radius: 5px;
  margin-bottom: 2%;
  
  h2 {
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkgray;
    color: black;
  }
  
  span {
    color: darkgray;
  }
`

const Card = ({title, views, answers}) => {
    return(
        <CardWrapper>
            <h2>{title}</h2>
            <span>{`Views: ${views} | Answers: ${answers} `}</span>
        </CardWrapper>
    )
}

export default Card