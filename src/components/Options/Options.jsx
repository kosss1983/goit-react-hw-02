import s from './Options.module.css';

const Options = ({
  updateFeedback,
  feedBackState,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <section className={s.options}>
      {Object.keys(feedBackState).map(option => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>reset</button>}
    </section>
  );
};

export default Options;
