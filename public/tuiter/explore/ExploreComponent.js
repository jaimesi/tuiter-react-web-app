import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {

    return (`
        <!-- search field and cog -->
        <div class="input-group mb-2">
            <input class="form-control rounded-pill ps-5"
               id="search-bar"
               type="search"
               placeholder="Search Tuiter">
            <i class="fa fa-search" id="search-button"></i>
            <a href="../explore-settings.html" class="border-0 bg-black">
                <i id="gear-icon" class="fa fa-gear fa-2x ms-3"></i>
            </a>
        </div>
        <!-- tabs -->
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline">
              <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="card mb-2">
            <img src="../images/spacex-starship.jpg"
            class="card-img-top" alt="SpaceX's Starship">
            <div class="card-img-overlay">
            <h2 class="card-title wd-bottom-left mb-0">SpaceX's Starship</h2>
            </div>
        </div>
        
        ${PostSummaryList()}
       
    `);

}

export default ExploreComponent;