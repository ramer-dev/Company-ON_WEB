import {Button} from "react-bootstrap";
import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Company-ON</h1>

            <div>
                <input type={'text'} name={'id'}/>
                <input type={'password'} name={'pw'}/>
            </div>

            <div>
                <Link to={"./Main"}>
                    <Button name={'login'} type={'submit'} onClick={event => console.log(event, '로그인')}>
                        로그인
                    </Button>
                </Link>
                <Link to={"./signup"}>
                    <Button name={'login'} type={'submit'} onClick={event => console.log(event, '회원가입')}>
                        회원가입
                    </Button></Link>
            </div>

        </div>
    );

}

export default Home;