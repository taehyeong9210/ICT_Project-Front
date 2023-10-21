import LayoutComponent from '../component/LayoutComponent';
import React from 'react';

const SignupComponent = () => {
  return (
    <>
      <form>
        <div>
          <input type="text" placeholder="아이디를 입력해주세요." />
          <input type="password" placeholder="비밀번호를 입력해주세요." />
          <input type="email" placeholder="이메일을 입력해주세요." />
          <button>회원가입</button>
          <button>취소</button>
        </div>
      </form>
    </>
  );
};

const Signup = () => {
  return (
    <div>
      <LayoutComponent component={<SignupComponent />} />
    </div>
  );
};

export default Signup;
