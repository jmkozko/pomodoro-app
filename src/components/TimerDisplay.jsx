import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './TimerDisplay.css';

export function TimerDisplay(props) {
  // return <div className="TimerDisplay">{props.currentTime}</div>;
  return (<div className={styles.progressBar}>
      <CircularProgressbar value={props.currentTime} text={`${props.currentTime}%`} />
    </div>);
}

export default TimerDisplay;
