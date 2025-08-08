import { useState } from 'react';
import './Body.css'

const Body = () => {
    
    const[state,setState] = useState({
        name:"",
        gender:"",
        birth:"",
        bio:""
    });

const handleOnChange = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    });
};

    
    return (
        <>
        <div>
            <div>
                <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름"></input>
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input name="birth" type="date" value={state.birth} onChange={handleOnChange}></input>
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange}></textarea>
            </div>
            <h4>데이터 출력</h4>
            <div>
                <label>이름  </label>{state.name}<br />
                <label>성별  </label>{state.gender}<br />
                <label>생년월일  </label>{state.birth}<br />
                <label>BIO  </label>{state.bio}<br />
            </div>
            </div>
        </>
    );
};

export default Body;