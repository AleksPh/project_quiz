import React from 'react';
import Link from 'next/link';

const answers = [
  { id: 1, text: "Male", emoji: '👨'},
  { id: 2, text: "Female", emoji: '👩' },
  { id: 3, text: "Non-binary", emoji: '🧑' },
];

const Answers = () => {
  return (
    <div>
      {answers.map((answer) => (
        <>
        <Link href='/step1'>
        <div key={answer.id} className='quiz-answer'>
          <input type="radio" id={answer.id} name="answer" value={answer.text} className='radio-hidden' />
          <label htmlFor={answer.id} className='quiz-label'>
          {answer.emoji} {answer.text}
          </label>
        </div>
        </Link>
        </>
      ))}
    </div>
  );
};

export default Answers;
