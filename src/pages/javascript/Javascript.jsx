import { useEffect, useState } from "react";
import { questions } from "./index.js";
import { shuffle } from "lodash";
import "./style.scss";

// Shuffle the questions when the component is initialized
const shuffledQuestions = shuffle(questions);

const Javascript = () => {
  const [answers, setAnswers] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [shuffleQuestions, setShuffleQuestions] = useState(false); // Initialize shuffle flag as false

  useEffect(() => {
    setShuffleQuestions(true); // Enable shuffling when the component mounts
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));

    // Remove this question from unanswered questions
    setUnansweredQuestions((prevUnansweredQuestions) => prevUnansweredQuestions.filter((id) => id !== questionId));
  };

  const handleShowCorrectAnswer = () => {
    // Check if all questions are answered
    const isAllAnswered = questions.every((question) => answers[question.id]);

    if (isAllAnswered) {
      const correctAnswers = {};
      questions.forEach((question) => {
        correctAnswers[question.id] = question.answer;
      });
      setCorrectAnswer(correctAnswers);
    } else {
      alert("Please answer all the questions before showing the correct answers.");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get all unanswered questions
    const unanswered = questions.filter((question) => !answers[question.id]).map((question) => question.id);

    if (unanswered.length === 0) {
      // Grade the test
      let score = 0;
      questions.forEach((question) => {
        if (answers[question.id] === question.answer) {
          score++;
        }
      });

      // Display the score
      alert(`Your score: ${score}/${questions.length}`);
    }

    // Set form submission flag and unanswered questions
    setIsFormSubmitted(true);
    setUnansweredQuestions(unanswered);
  };

  return (
    <div className="Javascript_">
      <h1>JavaScript Quiz</h1>
      <div className="questions">
        <form onSubmit={handleFormSubmit}>
          {shuffledQuestions.map((question, index) => (
            <div key={question.id} className={`question ${unansweredQuestions.includes(question.id) ? "unanswered" : ""}`}>
              <h2>
                <span>{index + 1}. </span>
                {question.question}
              </h2>
              {question.code && <code dangerouslySetInnerHTML={{ __html: question.code }} />}
              <ul>
                {question.options.map((option) => {
                  const isAnswered = answers[question.id] === option;
                  const isCorrect = correctAnswer[question.id] === option;
                  const shouldHighlight = isFormSubmitted && isAnswered && !isCorrect;

                  return (
                    <li key={option} className={`${isAnswered && isCorrect ? "correct" : ""} ${shouldHighlight ? "incorrect" : ""}`}>
                      <label>
                        <input type="radio" name={`question-${question.id}`} value={option} checked={isAnswered} onChange={() => handleAnswerChange(question.id, option)} />
                        <span className="option">{option}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              {unansweredQuestions.includes(question.id) && isFormSubmitted && <span className="error-message">Please answer this question.</span>}
            </div>
          ))}
          <button type="submit" onClick={handleShowCorrectAnswer}>
            {isFormSubmitted ? "Resubmit" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Javascript;
