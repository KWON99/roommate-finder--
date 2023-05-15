import React from 'react'
import './register.css'
export default function Register() {
    return (
        <div className='container'>
            <div className='title'>회원가입</div>
            <form method="POST" action="/api/auth/signup">
                <div className="user-details"> 
                  <div className="input-box">
                    <span className="details">이름</span>
                    <input type='text' placeholder='Enter your name' required/> 

                  </div>
                  <div className="input-box">
                    <span className="details">Username</span>
                    <input type='text' placeholder='Enter your username' required/> 

                  </div>
                  <div className="input-box">
                    <span className="details">이메일</span>
                    <input type='text' placeholder='E-mail' required/> 

                  </div>
                  <div className="input-box">
                    <span className="details">휴대전화</span>
                    <input type='text' placeholder='Enter your phone number' required/> 

                  </div>
                  <div className="input-box">
                    <span className="details">비밀번호</span>
                    <input type='text' placeholder='Password' required/> 

                  </div>
                  <div className="input-box">
                    <span className="details">비밀번호 재확인</span>
                    <input type='text' placeholder='Confirm password' required/> 

                  </div>
                </div>
             
                <div className='gender-details'>
                    <input type='radio' name='gender' id='dot-1'/>
                    <input type='radio' name='gender' id='dot-2'/>
                    <span className='gender-title'>Gender</span>
                    <div className='category'>
                        <label for="dot-1">
                            <span className='dot one'></span>
                            <span className='gender'>남자</span>
                        </label>
                    
                        <label for="dot-2">
                            <span className='dot two'></span>
                            <span className='gender'>여자</span>
                        </label>

                    </div>
                </div>
                <div className='button'>
                    <input type='submit' value='Register'/>
                </div>
                 



            </form>
        </div>
    )
}