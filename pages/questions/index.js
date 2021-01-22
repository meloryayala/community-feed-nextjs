import styled from "styled-components";
import {useEffect, useState} from "react";
import Card from "../../components/Card";
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "../../components/Pagination";

const QuestionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`

const CardLink = styled.a`
  text-decoration: none;
`

const Questions = () => {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const router = useRouter()
    const {page} = router.query

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`)
            const result = await data.json()

            if (result) {
                setQuestions(result.items)
                setLoading(false)
                setHasMore(result.has_more)
            }
        }

        fetchData();
    }, [page]);
    //page is not set yet when first rendered, so as dependency it will render 2x, once its value retrieve from the API

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            {
                loading
                    ? <span>Loading...</span>
                    : (
                        <>
                            <div>
                                {questions.map(question => (
                                    <Link
                                        key={question.question_id}
                                        href={`/questions/${question.question_id}`}
                                        passHref
                                    >
                                        <CardLink>
                                            <Card
                                                title={question.title}
                                                answers={question.answer_count}
                                                views={question.view_count}
                                            />
                                        </CardLink>
                                    </Link>
                                ))}
                            </div>
                            <Pagination currentPage={parseInt(page || 1)} hasMore={hasMore}/>
                        </>
                    )
            }
        </QuestionsContainer>
    )
}

export default Questions