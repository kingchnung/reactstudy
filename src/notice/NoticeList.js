import { useState } from 'react';
import Notice from './Notice.js'

const NoticeList = ({notice}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchNotice = () => {
        return search === "" ? notice : 
        notice.filter((nt) => nt.content.toLowerCase().includes(search.toLowerCase())
    );
    }

    return (
        <div className='NoticeList'>
            <h2>게시글 목록</h2>
            <h4>게시글 검색</h4>
            <input type='text' value={search} onChange={onChangeSearch} />
            <div>
                {getSearchNotice().map((nt) => (
                    <Notice key={nt.no} {...nt} />
                ))}
            </div>
        </div>
    );
};

export default NoticeList;