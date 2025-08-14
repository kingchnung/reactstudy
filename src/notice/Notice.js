const Notice = ({ no, writer, content, writeDate, isDone, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(no);
    };

    const onClickDelete = () => {
        onDelete(no);
    };

    return (
        <div className="Notice">
            {/* <table class="table caption-top">
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
                <tbody> */}
                    <tr>
                        <td><input type="checkbox" onChange={onChangeCheckbox} checked={isDone} /></td>
                        <td>{no}</td>
                        <td>{writer}</td>
                        <td>{content}</td>
                        <td>{new Date(writeDate).toLocaleDateString()}</td>
                        <td><button type="button" onClick={onClickDelete} class="btn btn-primary">삭제</button></td>
                    </tr>
                {/* </tbody>
            </table> */}
        </div>
    )

}

export default Notice;