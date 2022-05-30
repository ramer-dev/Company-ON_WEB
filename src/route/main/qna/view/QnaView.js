import React, {useEffect} from "react";
import {Button, Divider} from "antd";


const QnaView = (props) => {
    return (<div>
        <div>
            <div>{props.data.title}</div>
            <div>{props.data.name}</div>
            <div>{props.data.date}</div>
        </div>
        <Divider/>
        <div>
            <div>
                {props.paragraph}본문
            </div>
            <Button>이 글이 도움돼요</Button>
            <Button onClick={event => props.loadPage(5, props.data)}>수정</Button>
            <Button onClick={event => props.loadPage(6, props.data)}>삭제</Button>
            <Button onClick={event => props.loadPage(2)}>취소</Button>
        </div>
        <Divider/>
        <div>
            댓글
        </div>
    </div>);
}

export default QnaView