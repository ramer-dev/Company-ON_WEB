import {Button, Nav} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Home.css'
import axios from "axios";
import {Form, Image, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

function Home() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [user, setUser] = useState("default_userName");

    const sessionStorage = window.sessionStorage;

    useEffect(() => {

        sessionStorage.setItem("name", id)
        if (user !== 'default_userName') {

            navigate('/main', {
                state: {
                    name: user
                }
            })
        }
    }, [user])

    const navigate = useNavigate();

    const idHandler = (e) => {
        e.preventDefault();
        setId(e.target.value);
    };

    const pwHandler = (e) => {
        e.preventDefault();
        setPw(e.target.value);
    };

    const submitHandler = async (e) => {

        let body = {
            id: id,
            pw: pw
        }
        console.log(body);
        // axios
        //     .post("URL", body)
        //     .then(res => console.log(res))
        //     .then(() => setUser('1'));

        if (id === '') {
            alert("ID를 입력해주세요.")
            return;
        }

        if (pw === '') {
            alert("PW를 입력해주세요.");
            return;
        }

        setUser("공주")
        // return
    };

    return (
        <div className={'home_container'}>

            <div className={'home_img'}>
                <Image preview={false} src={'images/title_image.png'}/>
            </div>
            <h1>Company-ON</h1>

            <div>
                <Form name={"login"}>
                    <Form.Item label={"ID"} name={"ID"} wrapperCol={{span: 4}} labelCol={{span: 10}}
                               rules={[{
                                   required: true,
                                   message: 'ID를 입력해주세요!'
                               }]}>
                        <Input type={'text'} placeholder={'ID'} prefix={<UserOutlined className="site-form-item-icon"/>}
                               onChange={idHandler}/>
                    </Form.Item>
                    <Form.Item label={"PW"} name={"PW"} wrapperCol={{span: 4}} labelCol={{span: 10}}
                               rules={[{
                                   required: true,
                                   message: '비밀번호를 입력해주세요!'
                               }]}>
                        <Input type={'text'} placeholder={'Password'}
                               prefix={<LockOutlined className="site-form-item-icon"/>} onChange={pwHandler}/>
                    </Form.Item>
                </Form>
            </div>

            <div className={'home_btn'}>

                <Button name={'login'} type={'submit'} onClick={event => submitHandler(event)}>
                    로그인
                </Button>
                {/*{user && <Navigate to={{pathname:'/main', state:{id:user}}}/>}*/}
                <Link to={"./signup"}>
                    <Button name={'login'} type={'submit'}>
                        회원가입
                    </Button></Link>
            </div>

        </div>
    );

}

export default Home;