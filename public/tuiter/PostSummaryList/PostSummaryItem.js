const PostSummaryItem = (post) => {

    const {
        topic, userName, time, image, title
    } = post;

    return (`
    
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <p class="card-subtitle text-muted">${topic}</p>
              <p class="card-title wd-bold-text d-inline">${userName}</p>
              <i class="fa fa-check-circle d-inline"></i>
              <p class="text-muted d-inline">- ${time}</p>
              <p class="card-text wd-bold-text">${title}</p>
            </span>
            <img class="ms-sm-4 me-sm-2 ms-lg-3 ms-xxl-5 wd-rounded-img"
                 width="84px"
                 src="${image}">
        </li>
    
    `);

}

export default PostSummaryItem;