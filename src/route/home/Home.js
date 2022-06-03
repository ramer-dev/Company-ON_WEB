import {Button, Nav} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import './Home.css'
import axios from "axios";

function Home() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [user, setUser] = useState("default_userName");

    useEffect(() => {
        console.log(user)

        if (user !== 'default_userName') {

            navigate('/main', {
                state: {
                    username: user
                }
            })
        }
        console.log("change",user)
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
        <div>

            <h1>Company-ON</h1>

            <div>
                <input type={'text'} onChange={idHandler}/>
                <input type={'password'} onChange={pwHandler}/>
            </div>

            <div>

                <Button name={'login'} type={'submit'} onClick={event => submitHandler(event)}>
                    로그인
                </Button>
                {/*{user && <Navigate to={{pathname:'/main', state:{id:user}}}/>}*/}
                <Link to={"./signup"}>
                    <Button name={'login'} type={'submit'} onClick={event => console.log(event, '회원가입')}>
                        회원가입
                    </Button></Link>
            </div>

        </div>
    );

}

export default Home;