import { useState } from "react";
import { questions } from "./index.js";
import "./style.scss";

const Javascript = () => {
  const [answers, setAnswers] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));

    // Remove this question from unanswered questions
    setUnansweredQuestions((prevUnansweredQuestions) => prevUnansweredQuestions.filter((id) => id !== questionId));
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
    } else {
      // Display an error message
      alert("Please answer all the questions before submitting.");
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
          {questions.map((question) => (
            <div key={question.id} className={`question ${unansweredQuestions.includes(question.id) ? "unanswered" : ""}`}>
              <h2>{question.question}</h2>
              <code>{question.code}</code>
              <ul>
                {question.options.map((option) => (
                  <li key={option}>
                    <label>
                      <input type="radio" name={`question-${question.id}`} value={option} checked={answers[question.id] === option} onChange={() => handleAnswerChange(question.id, option)} />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              {unansweredQuestions.includes(question.id) && isFormSubmitted && <span className="error-message">Please answer this question.</span>}
            </div>
          ))}
          <button type="submit">{isFormSubmitted ? "Resubmit" : "Submit"}</button>
        </form>
      </div>
    </div>
  );
};

export default Javascript;
