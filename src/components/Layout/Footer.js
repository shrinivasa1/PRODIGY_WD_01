import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography } from "@mui/material";
const Footer = () => {

  const avt={color:"white",cursor:"pointer"}
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}  >
        <Box    sx={{ my: 3,  "& svg": {  fontSize: "60px",color:"white", cursor: "pointer",  mr: 2, }, 
        "& svg:hover": {
              color: "goldenrod",   transform: "translateX(5px)",  transition: "all 400ms", }, }} >
          {/* icons */}
         <a href="https://www.instagram.com/shrinivas_acharya_3358/?hl=en"> <InstagramIcon /></a>
          <TwitterIcon />
          <GitHubIcon />
          <a href="https://www.linkedin.com/in/shrinivasa-s-46b9bb2b8/"><LinkedInIcon /></a>
        </Box>
        <Typography 
          variant="h5"
          sx={{
            "@media (max-width:600px)":{
              fontSize: "1rem"
            },
          }}
          style={avt}
        >
          All Rights Reserved &copy; ShriniAcharya
        </Typography>
      </Box>
    </>
  );
};

export default Footer;