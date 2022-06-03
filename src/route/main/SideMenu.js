import {Menu} from "antd";
import React from "react";
import Context from "./Context";
import QNA from "./qna/QNA";



function SideMenu(props) {
    const items = [
        {label: `${props.username} 님`, key: 'item-1',},
        {
            label: 'Company-ON', key: 'stub 0',
            children: [
                {label: '홈', key: 'item-1-0'},
                {label: '온보딩 절차 안내', key: 'item-1-1'},
                {label: '입사 서류 제출', key: 'item-1-2'},
                {label: '기업 문화/규정', key: 'item-1-3'},
                {label: '전체 구성원', key: 'item-1-4'},
                {label: '사무실 이용', key: 'item-1-5'},
                {label: 'Q&A', key: 'item-1-6'},
            ]
        },
        {
            label: '사용자', key: 'stub 1',
            children: [
                {label: '개인 정보', key: 'item-2-1'},
                {label: '정보 등록', key: 'item-2-2'},
            ]
        },
        {label: '로그아웃', key: 'item-3'},


    ];

    const onClick = (e) => {
        console.log('click', e)

        if (e.key === 'item-1-6') {
            props.LoadPage(2, props.data)
        } else {
            props.LoadPage(1)
        }
    }

    return (
        <Menu onClick={onClick}
              style={{width: 256, position: 'fixed'}}
              mode={"inline"}
              items={items}/>
    )

}

export default SideMenu;