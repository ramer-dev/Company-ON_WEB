import React, {useState} from "react";
import {Button, Divider, Input} from "antd";
import TextArea from "antd/es/input/TextArea";

const QnaEdit = (props) => {
    const [paragraph, setParagraph] = useState(props.paragraph);
    const [title, setTitle] = useState(props.data.title);

    let data = props.data;


    const textChangeHandler = (event) => {
        data.paragraph = event.target.value;
    }

    const titleChangeHandler = (event) => {
        console.log(event.target.value)
        data.title = event.target.value;
    }

    return (
        <div>
            <div>Q&A 수정</div>
            <Divider/>
            <div>제목 :
                <Input type={"text"} defaultValue={props.data.title} onChange={titleChangeHandler} name={'title'}/>
            </div>
            <Divider/>

            <div><TextArea defaultValue={props.paragraph} onChange={textChangeHandler}/>
                <Button onClick={event => props.loadPage(4, props.data)}>취소</Button>
                <Button onClick={event => {
                    console.log(data)
                    props.loadPage(4, data)
                }}>확인</Button>
            </div>
        </div>
    )
}

export default QnaEdit