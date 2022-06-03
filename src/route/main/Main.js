import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd'

// import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
import SideMenu from "./SideMenu";
import Context from "./Context";
import QNA from "./qna/QNA";
import QnaAdd from "./qna/add/QnaAdd";
import QnaView from "./qna/view/QnaView";
import QnaEdit from "./qna/edit/QnaEdit";
import QnaDelete from "./qna/del/QnaDelete";
import {useLocation, useNavigate} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);
//     return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: `subnav ${key}`,
//         children: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });


const Main = () => {
    let [page, setPage] = useState(<Context/>);

    const location = useLocation();
    console.log('state', location)
    const {username} = location.state
    let data = {name : username}

    const LoadPage = (pageNum, key) => {
        switch (pageNum) {
            case 1 :
                setPage(<Context/>)
                break;
            case 2:
                setPage(<QNA loadPage={LoadPage} data={key}/>)
                break;
            case 3:
                setPage(<QnaAdd loadPage={LoadPage} data={key}/>)
                break;
            case 4:
                setPage(<QnaView loadPage={LoadPage} data={key}/>)
                break;
            case 5:
                setPage(<QnaEdit loadPage={LoadPage} data={key}/>)
                break;
            case 6:
                setPage(<QnaDelete loadPage={LoadPage} data={key}/>)
        }
    }
    return (


        <Layout>
            {/*<Header className="header">*/}
            {/*    <div className="logo"/>*/}
            {/*    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1}/>*/}
            {/*</Header>*/}
            <Content
                style={{
                    height: '100vh',
                    padding: '0 50px',
                }}
            >
                <Layout
                    className="site-layout-background"
                    style={{
                        padding: '24px 0',

                    }}
                >
                    <SideMenu LoadPage={LoadPage} data={data} username={username}/>

                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <div style={{marginLeft: '256px', display: "flex", flexWrap: 'wrap'}}>
                            {page}
                        </div>
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default Main;