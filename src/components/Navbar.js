import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <h1>APVote</h1>
            <ul>
                <li><Link to="addCampaign">Add Campaign</Link></li>
            </ul>
        </div>
     );
}
 
export default Navbar;