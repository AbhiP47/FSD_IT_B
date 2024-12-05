import React, { useState } from "react";
import { qBank } from "../data";
const quiz = () => {
  const [qid, setQid] = useState(0);
  function handleprevious() {
    if (qid > 0) setQid(qid - 1);
  }
  function handleNext() {
    if (qid < qBank.length) setQid(qid + 1);
  }
  return (
    <div>
      <div class="quiz-container">
        Quiz-App Question {}: {}
        <br />
        Question{qBank.id}:{qBank.ques}
      </div>
      <div>
        <input type="radio" name="opt" />
        {qBank.opt1}
      </div>
      <div>
        <input type="radio" name="opt" />
        {qBank.opt2}
      </div>
      <div>
        <input type="radio" name="opt" />
        {qBank.opt3}
      </div>
      <div>
        <input type="radio" name="opt" />
        {qBank.opt4}
      </div>
      <div>
        <button id="previous" onClick={handleprevious}>
          Previous
        </button>
      </div>
      <div>
        <button id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default quiz;
