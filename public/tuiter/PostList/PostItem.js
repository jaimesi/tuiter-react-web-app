const PostItem = (post) => {

    const {
        userImage, userName, handle, time, postSummary,
        cardImage, cardTitle, cardBody, cardLink,
        numComments, numRetuits, numLikes, isHidden,
    } = post;

    return (`
    
    <div class="wd-home-screen-post wd-border-bottom">
        <div class="wd-user-dp-left me-3">
            <img class="wd-rounded-icon wd-cover-fit wd-user-dp" src="${userImage}">
        </div>
        <div class="wd-home-post-div">
            <div>
                <span>
                    <i class="fa fa-ellipsis-h float-end wd-gray-color"></i>
                </span>
                <span class="wd-bold-text">${userName}</span>
                <span>
                    <i class="fa fa-check-circle"></i>
                </span>
                <span class="text-muted">@${handle}</span>
                <span class="text-muted">· ${time}</span>
            </div>
            <div>
                <p>${postSummary}</p>
            </div>
            <div class="card wd-rounded-cover-photo wd-card-border mb-3">
                <img class="card-img-top wd-rounded-cover-photo wd-cover-fit"
                     height="300px"
                     src="${cardImage}">
                <div id="post-body" class="card-body wd-card-body-border-top ${isHidden}">
                    <p class="card-title mb-0 wd-font-size-15">
                        ${cardTitle}
                    </p>
                    <p class="card-text text-muted mb-0 wd-font-size-15">
                        ${cardBody}
                    </p>
<!--                    <i class="fa fa-link fa-flip-horizontal wd-gray-color"></i>-->
                    <a href="#" class="card-link text-muted d-inline text-decoration-none wd-font-size-15">${cardLink}</a>
                </div>
            </div>
            <div class="d-flex justify-content-between wd-width-74-percent">
                <a href="#" class="text-decoration-none wd-gray-color">
                    <i class="fa fa-comment-o me-2"></i>
                    <p class="d-inline-block">${numComments}</p>
                </a>
                <a href="#" class="text-decoration-none wd-gray-color">
                    <i class="fa fa-retweet me-2"></i>
                    <p class="d-inline-block">${numRetuits}</p>
                </a>
                <a href="#" class="text-decoration-none wd-gray-color">
                    <i class="fa fa-heart-o me-2"></i>
                    <p class="d-inline-block">${numLikes}</p>
                </a>
                <a href="#" class="text-decoration-none wd-gray-color">
                    <i class="fa fa-share"></i>
                </a>
            </div>
        </div>
    </div>
    <br>
    
    `);

}

export default PostItem;