import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"
const PostSummaryList = () => {

    let postList = "";

    for (let i = 0; i < exploreItems.length; i++) {
        const post = exploreItems[i];
        postList += PostSummaryItem(post);
    }

    return (`
           <ul class="list-group list-group-flush"
           <!-- continue here -->
           ${postList}
           </ul>
`); }

export default PostSummaryList;