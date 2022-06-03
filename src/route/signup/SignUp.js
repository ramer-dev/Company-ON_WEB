import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Col, Form, Image, Input, Row, Button, Select, Checkbox} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();
    useEffect(() => {

        if (id.length > 0 && pw.length > 0 && email.length > 0
            && number.length > 0 && nickname.length > 0 && gender.length > 0) {
            if (pw === pwCheck && nickCheck && agreement) {
                setSign(true)
            } else {
                setSign(false);
            }
        } else {
            setSign(false)
        }
    })

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("")
    const [nickname, setNickname] = useState("");
    const [nickCheck, setNickCheck] = useState(false)
    const [gender, setGender] = useState("");
    const [agreement, setAgreement] = useState(false)
    const [sign, setSign] = useState(false)
    const [validate, setValidate] = useState('-');

    const idHandler = (e) => {
        e.preventDefault();
        setId(e.target.value);
    };

    const pwHandler = (e) => {
        e.preventDefault();
        setPw(e.target.value);
    };

    const pwCheckHandler = (e) => {
        e.preventDefault();
        setPwCheck(e.target.value);
    }

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const phoneNumberHandler = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
    };

    const nickNameHandler = (e) => {
        e.preventDefault();
        setNickname(e.target.value);
    };
    const genderHandler = (value) => {
        // e.preventDefault();
        setGender(value);
    };


    // 닉네임 체크
    const nickNameCheck = (e) => {
        e.preventDefault();
        setNickCheck(true);

        switch ("success"){
            case "success":
                setValidate("success");
                break;
            case "error":
                setValidate("error");
        }
        // e.target.parentElement. = 'primary'
        // axios
        //     .post("URL", body)
        //     .then(res => console.log(res))
        //     .then(() => setUser('1'));
    }

    // 회원가입
    const signUp = (e) => {
        const body = {
            id: id,
            pw: pw,
            phone: number,
            nickname: nickname,
            gender: gender,
            email: email,
        }

        // axios
        //     .post("URL", body)
        //     .then(res => {
                navigate("..")
        //     })
    }

    return (
        <div>
            <div className={'home_img'}>
                <Image preview={false} src={'images/title_image.png'}/>
            </div>
            <h1>Company-ON</h1>

            <Form name={'signUp'}>
                <Form.Item label={"ID"} name={"ID"} wrapperCol={{span: 6}} labelCol={{span: 9}}
                           rules={[{
                               required: true,
                               message: 'ID를 입력해주세요!'
                           }]}>
                    <Input type={'text'} placeholder="ID" onChange={idHandler}/>
                </Form.Item>

                <Form.Item label={"PW"} name={"PW"} wrapperCol={{span: 6}} labelCol={{span: 9}}
                           rules={[{
                               required: true,
                               message: '비밀번호를 입력해주세요!'
                           }]}>
                    <Input
                        type="password"
                        placeholder="Password" onChange={pwHandler}/>
                </Form.Item>

                <Form.Item name="confirm"
                           label="Confirm PW"
                           dependencies={['PW']}
                           hasFeedback
                           wrapperCol={{span: 6}} labelCol={{span: 9}}
                           rules={[
                               {
                                   required: true,
                                   message: '비밀번호를 입력해주세요!',
                               },
                               ({getFieldValue}) => ({
                                   validator(_, value) {
                                       if (!value || getFieldValue('PW') === value) {
                                           return Promise.resolve();
                                       }
                                       return Promise.reject(new Error('비밀번호가 일치하지 않습니다!'));
                                   },
                               }),
                           ]}>
                    <Input type="password" onChange={pwCheckHandler}
                           placeholder="Password"/>
                </Form.Item>

                <Form.Item label={"E-mail"} name={"email"}
                           wrapperCol={{span: 6}} labelCol={{span: 9}}
                           rules={[{
                               required: true,
                               message: '이메일을 입력해주세요!'
                           }]}>
                    <Input onChange={emailHandler} placeholder={"E-mail"} type={"email"}/>
                </Form.Item>

                <Form.Item label={"Phone Number"} name={"phone"} wrapperCol={{span: 6}} labelCol={{span: 9}}
                           rules={[{
                               required: true,
                               message: '전화번호를 입력해주세요!'
                           }]}>
                    <Input onChange={phoneNumberHandler} placeholder={"Phone Number"}
                           type={"tel"}/>
                </Form.Item>

                <div>
                    <Form.Item label={"Nickname"}
                               hasFeedback validateStatus={validate}
                               wrapperCol={{span: 6}} labelCol={{span: 9}}>
                        <Row style={{flexWrap: 'nowrap'}}>
                            <Col>
                                <Form.Item  noStyle name={"nickname"}>
                                    <Input onChange={nickNameHandler} placeholder={"Nickname"}
                                           rules={[{
                                               required: true,
                                               message: '닉네임을 입력해주세요!'
                                           }]}/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Button onClick={event => nickNameCheck(event)}><CheckOutlined/></Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item wrapperCol={{span: 6}} labelCol={{span: 9}}
                               name="gender"
                               label="Gender"
                               rules={[
                                   {
                                       required: true,
                                       message: '성별을 선택해주세요!',
                                   },
                               ]}
                    >
                        <Select placeholder="Gender" onChange={genderHandler}>
                            <Select.Option value="male">남성</Select.Option>
                            <Select.Option value="female">여성</Select.Option>
                            <Select.Option value="other">기타</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('정책에 동의하셔야 가입하실 수 있습니다.')),
                            },
                        ]}
                    >
                        <Checkbox onChange={event => {
                            setAgreement(!agreement)
                        }}>
                            <a style={{color:'#4594ff'}}>회원 가입 정책</a>에 동의합니다.
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={signUp}
                            disabled={!sign} type={"primary"} htmlType={"submit"}>회원가입</Button>
                    </Form.Item>
                </div>

            </Form>

            <Link to={".."}>
                <Button type={"submit"} onClick={signUp}>가짜회원가입</Button>
            </Link>
        </div>
    )
        ;
}

export default SignUp;