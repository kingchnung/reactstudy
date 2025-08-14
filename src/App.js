
import { useReducer, useRef } from 'react';
import NoticeForm from './notice/NoticeForm';
import './App.css';
import NoticeMain from './notice/NoticeMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const mockNotice = [
  {
    no: 0,
    isDone: false,
    writer: "홍길동",
    content: "안녕하세요",
    writeDate: new Date().getTime()
  },
  {
    no: 1,
    isDone: false,
    writer: "김철수",
    content: "반갑습니다.",
    writeDate: new Date().getTime()
  },
  {
    no: 2,
    isDone: false,
    writer: "최유리",
    content: "점심 맛있게 드셨나요.",
    writeDate: new Date().getTime()
  }
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [action.newNotice, ...state];
    }
    case 'UPDATE': {
      return state.map((nt) => 
        nt.no === action.targetNo ? { ...nt, isDone: !nt.isDone } : nt);
    }
    case 'DELETE': {
      return state.filter((nt) => nt.no !== action.targetNo);
    }
    default: 
      return state;
    
  }
}


const App = () => {
  // const [notice, setNotice] = useState(mockNotice);
  const noRef = useRef(3);
  const [notice, dispatch] = useReducer(reducer, mockNotice);

  const onCreate = (writer, content) => {
    dispatch(
      {
        type: "CREATE",
        newNotice: {
          no: noRef.current,
          writer,
          content,
          writeDate: new Date().getTime(),
          isDone: false
        }
      }
    );

    noRef.current += 1;
  };

  const onUpdate = (targetNo) => {
    dispatch({
      type: "UPDATE",
      targetNo
    });
  };

  const onDelete = (targetNo) => {
    dispatch({
      type: "DELETE",
      targetNo
    });
  };

  return (
    <div className="App">
      <NoticeForm onCreate={onCreate} />
      <NoticeMain notice={notice} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};


export default App;
