
import { useRef, useState } from 'react';
import NoticeForm from './notice/NoticeForm';
import './App.css';
import NoticeMain from './notice/NoticeMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const mockNotice = [
        {
            no:0,
            writer: "홍길동",
            content: "안녕하세요",
            writeDate: new Date().getTime()
        },
        {
            no:1,
            writer: "홍길동",
            content: "반갑습니다.",
            writeDate: new Date().getTime()
        },
        {
            no:2,
            writer: "홍길동",
            content: "점심 맛있게 드셨나요.",
            writeDate: new Date().getTime()
        }
    ];

const App = () => {
  const [notice, setNotice] = useState(mockNotice);
  const noRef = useRef(3);

  const onCreate = (writer, content) => {
    const newNotice = {
      no:noRef.current,
      writer,
      content,
      writeDate:new Date().getTime()
    };

    setNotice([...notice, newNotice]);
  };

  return (
    <div className="App">
      <NoticeForm onCreate={onCreate}/>
      <NoticeMain notice={notice} />
    </div>
  );
};


export default App;
