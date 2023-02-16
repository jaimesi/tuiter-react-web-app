import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

function homeComponent() {
    $('#wd-home').append(`
<!--        <h2>Home</h2>-->
    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar('Home')}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
            <!--<h3>HomeComponent</h3>-->
            ${PostList()}

        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <!--<h3>PostSummaryList</h3>-->
            ${PostSummaryList()}

        </div>
    </div>
    `);
}

$(homeComponent);