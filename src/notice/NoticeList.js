import { useState } from 'react';
import Notice from './Notice.js'

const NoticeList = ({ no, notice, onUpdate, onDelete }) => {
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
            <input type='text' value={search} class="form-control" onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
            <div>
                <table class="table caption-top">
                    <thead>
                        <tr className="col">
                            <th scope="col">선택</th>
                            <th scope="col">번호</th>
                            <th scope="col">작성자</th>
                            <th scope="col">내용</th>
                            <th scope="col">날짜</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> */}
                            {getSearchNotice().map((nt) => (
                                <Notice key={nt.no} {...nt} onUpdate={onUpdate} onDelete={onDelete} />
                            ))}
                            
                        {/* </tr> */}
                    </tbody>
                </table>
            </div>
            {/* <div>
                {getSearchNotice().map((nt) => (
                    <Notice key={nt.no} {...nt} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div> */}
        </div>
    );
};

export default NoticeList;