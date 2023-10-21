import React from 'react';
import LayoutComponent from '../component/LayoutComponent';

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector('.inputID');
  console.log(input.value);
  input.value = '';
};

const LoginComponent = () => {
  return (
    <form onSubmit={handleLoginSubmit}>
      <input
        className="inputID"
        type="text"
        // value={id}
        placeholder="아이디를 입력하세요"
      ></input>
      <input
        className="inputPW"
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
