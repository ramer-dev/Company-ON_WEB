import React from "react";
import {Button, Divider} from "antd";

const QnaDelete = (props) => {
    return (
        <div>
            <div> Q&A 삭제</div>
            <Divider/>
            <div>
                <div>정말 Q&A를 삭제하시겠습니까?</div>
                <div>
                    <Button onClick={event => props.loadPage(4, props.data)}>취소</Button>
                    <Button onClick={event => props.loadPage(2)}>확인</Button>
                </div>
            </div>

        </div>
    )
}

export default QnaDelete;