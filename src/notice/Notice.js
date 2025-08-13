const Notice = ({ no, writer, content, writeDate }) => {


    return (
        <div className="Notice">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {writer}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>{new Date(writeDate).toLocaleDateString()}</strong>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Notice;