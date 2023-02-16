import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {

    let userList = "";

    for (let i = 0; i < who.length; i++) {
        const user = who[i];
        userList += WhoToFollowListItem(user);
    }

    return (`
           <ul class="list-group">
           <!-- continue here -->
           <li class="list-group-item wd-bold-text">Who to follow</li>
           ${userList}
           </ul>
`); }

export default WhoToFollowList;