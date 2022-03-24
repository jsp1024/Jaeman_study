import React from 'react';
import './Detail.scss'
import {useHistory, useParams} from "react-router-dom";

function Detail(props){
    let history = useHistory();
    let {id} = useParams();
    let find_shoes = props.shoes.find(function (Data){
        return Data.id == id
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(find_shoes.id + 1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{find_shoes.title}</h4>
                    <p>{find_shoes.content}</p>
                    <p>{find_shoes.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button onClick={() => {history.goBack()}} className="btn btn-primary">뒤로가기</button>
                </div>
            </div>
        </div>
    )
};

export default Detail