import PostItem from "./PostItem.js";
import homeItems from "./posts.js"
const PostList = () => {

    let postList = "";

    for (let i = 0; i < homeItems.length; i++) {
        const post = homeItems[i];
        postList += PostItem(post);
    }

    return (`
        ${postList}
    `);

}

export default PostList;