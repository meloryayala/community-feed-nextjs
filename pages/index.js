import Questions, { getServerSideProps as getServerSidePropsQuestions } from "./questions";

export function  getServerSideProps (context) {
  return getServerSidePropsQuestions(context)
}

function Home(props) {
  return (
   <Questions {...props} />
  )
}

export default Home