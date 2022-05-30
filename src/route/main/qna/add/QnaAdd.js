import React from "react";
import {Button, Divider} from "antd";

const QnaAdd = (props) => {
    return (<div>
        <div>
            <div>{props.title}</div>
            <div>{props.name}</div>
            <div>{props.date}</div>
        </div>
        <Divider/>
        <div>
            <div>
                {props.paragraph}
            </div>
            <Button onClick={event => props.loadPage(2)}>취소</Button>
            <Button onClick={event => props.loadPage(2)}>등록</Button>
        </div>
        <Divider/>
        <div>
            댓글
        </div>
    </div>);
}

export default QnaAdd