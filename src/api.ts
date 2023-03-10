import { suffleArray } from "./utils";

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category:string;
    correct_answer:string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answer: string[]}

export const fetchQuizQuestions = async (difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
    const data = await(await fetch(endpoint)).json();
    return data.results.map((question: Question) => {
        return {
            ...question,
            answer: suffleArray([...question.incorrect_answers, question.correct_answer])
        }
    }
    )
}