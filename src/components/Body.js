import { useRef, useState } from 'react';
import './Body.css'

const Body = () => {

    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        alert(text);
    };

    return (
        <>
            <div>
                <div>
                    <input ref={textRef} value={text} onChange={handleOnChange} />
                    <button onClick={handleOnClick}>작성 완료</button>
                </div>
            </div>
        </>
    );
};

export default Body;