import { useRef, useState } from "react";

const NoticeForm = ({ onCreate }) => {
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmitNotice = () => {
        if (!writer.trim()) {
            inputRef.current.focus();
            alert("게시자를 입력해주세요");
            return;
        }

        if (!content.trim()) {
            inputRef.current.focus();
            alert("게시글을 입력해주세요.");
            return;
        }

        onCreate(writer, content);
        setWriter("");
        setContent("");
    };

    return (
        <div className="NoticeForm">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"><h2>게시자</h2></label>
                    <input onChange={onChangeWriter} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={writer} placeholder="관리자 이름이나 활동 명을 입력하세요." />
                        <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"><h2>게시글</h2></label>
                    <input onChange={onChangeContent} type="text" class="form-control" id="exampleInputPassword1" value={content} placeholder="게시할 공지사항 내용을 입력하세요." />
                </div>
                <button type="button" onClick={onSubmitNotice} class="btn btn-primary">진행시켜!</button>
            </form>
        </div>
    )

}

export default NoticeForm;