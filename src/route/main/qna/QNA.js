import React, {useState} from "react";
import {Table, Button, Modal} from "antd";

const columns = [
    {
        title: '제목',
        dataIndex: 'title',
    },
    {
        title: '작성자',
        dataIndex: 'name',
    },
    {
        title: '작성일',
        dataIndex: 'date',
    },
    {
        title: '도움지수',
        dataIndex: 'helped',
    },
];
const data = [];


for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        title: `title${i}`,
        name: `Edward King ${i}`,
        date: 'yyyy.mm.dd',
        helped: `${i}`,
    });
}

function QNA(props) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true); // ajax request after empty completing

        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div style={{width:'800px'}}>
        {/*    <div*/}
        {/*        style={{marginBottom: 16,}}>*/}
        {/*        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>*/}
        {/*            Reload*/}
        {/*        </Button>*/}
        {/*        <span style={{marginLeft: 8,}}>*/}
        {/*  {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
        {/*</span>*/}
        {/*    </div>*/}
            <Table columns={columns} dataSource={data}
                   onChange={onChange}
                   onRow={(record, rowIndex) => {
                       return {
                           onClick: e => {
                               console.log(record)

                               props.loadPage(4, record)
                           },
                       }
                   }}/>
            <Button onClick={event => props.loadPage(3, props.data)}>질문 등록하기</Button>
        </div>
    )
}

export default QNA