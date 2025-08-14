

import NoticeList from "./NoticeList";



const NoticeMain = ({notice, onUpdate, onDelete}) => {
    
    return (
        <div className="NoticeMain">
            <NoticeList notice={notice} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default NoticeMain;