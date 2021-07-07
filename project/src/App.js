import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';



function App() {        
    //Array
    let [글제목, 글제목변경] = useState(['남자 셔츠 추천','남자 반팔 추천','여름 신발 추천']); 
    let [작성날짜, 최종수정날짜] = useState(['21.07.01','21.07.05','21.07.06'])
    let [따봉, 따봉변경] = useState(0);
    let [조회수,조회수변경] = useState(0);
    let main_content = " 메인 "    

    function 조회수증가(){     
      조회수변경(조회수 + 1);      
    }
    
    function 제목바꾸기(){
      var newArray = [...글제목];      
      newArray[0] = 글제목[1];
      newArray[1] = 글제목[0];
      newArray[2] = 글제목[2];
      글제목변경( newArray );
    }
    
  return (    
    <div className="App">           
      <div className="nav_black">
         React 개발
      </div>     
      <div className="main_container">                    

          <MainContent/>

          <div className="side_list">
          <button onClick={ 제목바꾸기 }>제목 정렬</button>
            <div className="side_list_index">                                      
                    <h3 onClick={ ()=>{조회수증가( 조회수 + 1)} }>{ 글제목[0] }</h3>
                    <p><span className="ddabong" onClick={ ()=>{ 따봉변경( 따봉 + 1 ) } }>👍 </span> {따봉}    작성일 : { 작성날짜[0] } 조회수 : { 조회수 } </p>
                    <hr/>
            </div>          
            <div className="side_list_index">
                    <h3>{ 글제목[1] } </h3>
                    <p><span className="ddabong" onClick={ ()=>{console.log(1);}}> 👍 </span> {따봉}    작성일 : { 작성날짜[1] } 조회수 : { 1 }</p>
                    <hr/>
            </div>          
            <div className="side_list_index">
                    <h3>{ 글제목[1] } </h3>
                    <p><span className="ddabong" onClick={ ()=>{console.log(1);}}> 👍 </span> {따봉}    작성일 : { 작성날짜[2] } 조회수 : { 1 }</p>
                    <hr/>
            </div>          
          </div>
      </div>
    </div>   
  ); 
}  

function MainContent(){    
  return (
    <div className="main_Content">
    <h2>제목</h2>
    <p>내용</p>
    <p>상세내용</p>
    </div>
  )
}

export default App;
