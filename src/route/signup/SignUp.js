import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function SignUp() {
    return (
        <div>
            <h1>Company-ON</h1>

            <div>
                <h4>아이디</h4>
                <input/>
            </div>
            <div>
                <h4>비밀번호</h4>
                <input type={'password'}/>
            </div>
            <div>
                <h4>비밀번호 확인</h4>
                <input type={'password'}/>
            </div>
            <div>
                <h4>이메일</h4>
                <input/>
            </div>
            <div>
                <h4>연락처</h4>
                <input/> - <input/> - <input/>
            </div>
            <div>
                <h4>닉네임</h4>
                <input/>
                <Button type={"button"}>중복확인</Button>
            </div>
            <div>
                <h4>성별</h4>
                <label>남
                    <input type={"radio"} name={'sex'}/>
                </label>
                <label>여
                    <input type={"radio"} name={'sex'}/>
                </label>
            </div>
            <div>
                <input type={"checkbox"}/>
                회원가입 정책동의
                <br/>
                가입된 계정은 사내 인트라넷에서 그대로 사용 가능합니다.
            </div>
            <Link to={".."}>
            <Button type={"submit"}>회원가입</Button>
            </Link>
        </div>
    );
}

export default SignUp;