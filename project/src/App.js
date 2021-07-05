import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';



function App() {        
    //Array
    let [글제목, 글제목변경] = useState(['남자 셔츠 추천','남자 반팔 추천']); 
    let [작성날짜, 최종수정날짜] = useState(['21.07.01','21.07.05'])
    let [조회수] = useState([20,10]);
    let main_content = " 메인 "    
  return (
    <div className="App">
      <div className="nav_black">
         React 개발
      </div>

      <div className="main_container">          
          <div className="main_Content">
                { main_content }
          </div>
          <div className="side_list">
            <div className="side_list_index">
                    <h3>{ 글제목[0] }</h3>
                    <p>작성일 : { 작성날짜[0] } 조회수 : { 조회수[0] }</p>
                    <hr/>
            </div>          
            <div className="side_list_index">
                    <h3>{ 글제목[1] }</h3>
                    <p>작성일 : { 작성날짜[1] } 조회수 : { 조회수[1] }</p>
                    <hr/>
            </div>          
          </div>
      </div>
    </div>
  );
}

export default App;
