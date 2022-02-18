import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <h1><Link to="/">APVote</Link></h1>
            <ul>
                <li><Link to="addCampaign">Campaign</Link></li>
                <li><Link to="addCandidates">Candidates</Link></li>
            </ul>
        </div>
     );
}
 
export default Navbar;