import React from "react";
import {Button, Divider, Input} from "antd";
import TextArea from "antd/es/input/TextArea";

const QnaAdd = (props) => {
    let data = props.data;

    const titleChangeHandler = (event) => {
        data.title = event.target.value;
    }

    const textChangeHandler = (event) => {
        data.paragraph = event.target.value;
    }

    const today = new Date();
    const now = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    return (<div>
        <div>
            <div>제목 :
                <Input type={"text"} onChange={titleChangeHandler} name={'title'}/>
            </div>
            <div>{data}</div>
            <div>{now}</div>
        </div>
        <Divider/>
        <div>
            <div>
                <TextArea defaultValue={props.paragraph} onChange={textChangeHandler}/>
            </div>
            <Button onClick={event => props.loadPage(2, data)}>취소</Button>
            <Button onClick={event => props.loadPage(2, data)}>등록</Button>
        </div>
        <Divider/>
        <div>
            댓글
        </div>
    </div>);
}

export default QnaAdd