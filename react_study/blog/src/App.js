/*eslint-disable*/
import React,{ useState } from "react";
import "./App.css";

function App() {
    let [title,title_change] = useState(['맛있는 저녘밥','짜장짜장','배고프다','가나다라마바사']);
    let [good,good_count] = useState(0)
    let posts = "오늘저녘 머먹지";

    function title_sort(){
        let newArray = [...title];
        newArray.sort((a,b) => a.localeCompare(b));
        title_change(newArray);
    }


    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>
            <div className="list">
                <h3>{title[0]} <span onClick={() => {good_count(good+1)}}>👍</span> {good}</h3>
                <p>진짜 머먹지</p>
                <div><button onClick={title_sort}>변경</button></div>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[1]}</h3>
                <p>맛있는 짜장면</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[2]}</h3>
                <p>아침밥 먹고싶다아</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[3]}</h3>
                <p>아자차카타파하</p>
                <hr/>
            </div>

            <Modal />
        </div>
    );
}

function Modal(){
    return(
        <div>
            <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
            </div>
        </div>
    )
}

export default App;
