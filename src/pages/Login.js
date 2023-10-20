import React from "react";
import LayoutComponent from "../component/LayoutComponent";

const LoginComponent = () => {
  return (
    <form>
      <input
        type="text"
        // value={id}
        placeholder="아이디를 입력하세요"
      ></input>
      <input
        type="password"
        // value={pw}
        placeholder="비밀번호를 입력하세요"
      ></input>
      <button>확인</button>
      <button>회원가입</button>
    </form>
  );
};

const Login = () => {
  return (
    <div>
      <LayoutComponent component={<LoginComponent />} />
    </div>
  );
};

export default Login;
