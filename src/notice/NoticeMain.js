
import NoticeForm from "./NoticeForm";
import NoticeList from "./NoticeList";



const NoticeMain = ({notice}) => {
    
    return (
        <div className="NoticeMain">
            <NoticeList notice={notice} />
        </div>
    );
}

export default NoticeMain;