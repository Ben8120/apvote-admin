import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1><Link to="/">APVote</Link></h1>
            <Link to="addCampaign">Campaign</Link>
            <Link to="addCandidates">Candidates</Link>
        </div>
     );
}
 
export default Navbar;