import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

class ScoreBox extends Component{


  render(){

    return(
        <div>
            <div className="well">
                Question {this.props.current} out of {this.props.questions.length} <span className="pull-right">
                <strong>Score: {this.props.score}</strong>
                </span>
            </div>
        </div>
    )
  }
}

export default ScoreBox
