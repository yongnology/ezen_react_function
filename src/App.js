import { Component, useState } from 'react';
import './App.css';

// 함수형 스타일 컴포넌트
function FuncComp(props) {
  var numState=useState(props.num);
  var number = numState[0];
  var setNumber = numState[1];

  // var dateState = useState((new Date().toString()));
  // var _date = dateState[0];
  // var setDate = dateState[1];
  var [_date, setDate] = useState((new Date()).toString());

  console.log("numState값 = ", numState)
  console.log("_date = ", _date)
  console.log("setDate = ", setDate)

  return (
    <div className= "container">
      <h2>함수형 스타일컴포넌트</h2>
      <input type="button" value="random" onClick={function() {
        setNumber(Math.floor(Math.random()*100)+1);
      }}></input>
      <input type="button" value="current" onClick=
          {function() {
            setDate((new Date()).toString());
          }
        }></input>

      <p>숫자 : {number}</p>
      {/* 매개변수에대한.num */}
      <p>날짜 : {_date}</p>
    </div>
  );
}
// 클래스형 스타일 컴포넌트
class ClassComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      number : this.props.num,
      date:(new Date()).toString()
    }
  }
  render() {
    return (
      <div className= "container">
        <h2>클래스 스타일 컴포넌트</h2>
        <input type='button' value='random' onClick={function() {
            this.setState({number: Math.floor(Math.random()*100)+1})
          }.bind(this)}></input>

        <input type="button" value="current" onClick={
          function() {
            this.setState({date:(new Date()).toString()});
        }.bind(this)
      }></input>
        <p>숫자 : {this.state.number}</p>   {/* 나 자신.속성을 가져온다.num에 대한 */}
        <p>날짜 : {this.state.date}</p>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>리엑트 클래스 스타일 VS 함수형 스타일</h1>
      <FuncComp num={2}></FuncComp>
      <ClassComp num={2}></ClassComp>
    </div>
  );
}

export default App;
