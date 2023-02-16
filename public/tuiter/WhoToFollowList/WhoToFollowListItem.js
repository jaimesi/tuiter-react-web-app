const WhoToFollowListItem = (who) => {

    const {
        avatarIcon, userName, handle
    } = who;

    return(`

        <li class="list-group-item pb-0">
            <img class="pull-left me-xxl-3 me-xl-2 wd-rounded-icon" width="48px"
            src="${avatarIcon}">
            <button href="#" class="pull-right mt-1 btn-primary rounded-pill ps-2 pe-2
            wd-box-shadow-none wd-follow-button-style">Follow
            </button>
            <span>
            <p class="d-inline wd-bold-text">${userName}</p>
            </span>
            <span>
            <i class="fa fa-check-circle mt-1 ms-1 wd-absolute-position"></i>
            </span>
            <p class="mb-2">@${handle}</p>
        </li>
        
    `);
}

export default WhoToFollowListItem;