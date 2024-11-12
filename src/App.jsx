import { useEffect, useState } from 'react';
import feedbackData from './assets/feedbackData.json';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  let totalFeedback = 0;
  let positiveFeedback = 0;
  const [feedBackState, setFeedbackState] = useState(
    () => JSON.parse(localStorage.getItem('feedbackData')) ?? feedbackData
  );
  const updateFeedback = feedbackType => {
    setFeedbackState(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedbackState(feedbackData);
  };
  const { good, neutral, bad } = feedBackState;
  totalFeedback = good + neutral + bad;
  positiveFeedback = Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(feedBackState));
  }, [feedBackState]);

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedBackState={feedBackState}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedBackState={feedBackState}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
}

export default App;
