
import { Link } from "react-router-dom";
import Banner from "../components/images/banner.jpeg";

import { Grid} from "@mui/material";
import "../styles/HomeStyles.css"
import Layout from "../components/Layout/Layout";

const Home = () => { 
  return (

    <Layout>
      <Grid>

       <div className="home" style={{ backgroundImage: `url(${Banner})` }}>

        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="#order">
            <button>ORDER NOW</button>
          </Link>

        </div>
       </div> 
       
      </Grid>
    </Layout>
  );
};

export default Home;
