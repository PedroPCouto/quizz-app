import React from 'react';
//types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question:string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
export const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <Wrapper>

            <p className='number'>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}}/>
            <div>
                {answers.map((ans) =>{
                    return (
                        <ButtonWrapper
                        key={ans}
                        correct={userAnswer?.correctAnswer === ans}
                        userClicked={userAnswer?.answer === ans}
                      >
                        <button disabled={!!userAnswer} value={ans} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:ans}}/>
                        </button>
                        </ButtonWrapper>)
                })}
            </div>
        </Wrapper>
        );
}
