import s from './Feedback.module.css';

const Feedback = ({ feedBackState, totalFeedback, positiveFeedback }) => {
  return (
    <section>
      <ul className={s.feedback}>
        {Object.keys(feedBackState).map(option => (
          <li key={option}>
            {option}: {feedBackState[option]}
          </li>
        ))}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </section>
  );
};

export default Feedback;
