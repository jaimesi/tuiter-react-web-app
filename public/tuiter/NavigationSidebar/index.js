import NavigationItem from "./NavigationItem.js";
import navItems from "./navItems.js";

const NavigationSidebar = (active) => {

    return(`

       <div class="list-group">
          <i class="list-group-item fab fa-tumblr"></i>
           <!-- continue rest of list, e.g.,
                Home, Explore, Notifications,  Messages, etc. -->
           ${
                navItems.map(navigation => {
                    return (NavigationItem(navigation, active));
                }).join('')
            }
       </div>
       <div class="d-grid mt-2">
         <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
       </div>
 `);
}
export default NavigationSidebar;