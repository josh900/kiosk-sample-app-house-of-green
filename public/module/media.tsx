import React, { useState } from "react";        
import Box from "@mui/material/Box";        
        
const Media = ({ mediaUrl }: { mediaUrl: string }) => {        
  const [displayMediaUrl, setDisplayMediaUrl] = useState(false);        
  const playlistId = 16585;        
        
  const handleCardClick = () => {        
    setDisplayMediaUrl(true);        
    const timer = setTimeout(() => {        
      setDisplayMediaUrl(false);        
    }, 240000); // milliseconds  
        
    return () => clearTimeout(timer);        
  };        
        
  return (        
    <Box        
      sx={{        
        display: "flex",        
        justifyContent: "center",        
        alignItems: "center",        
        height: "100vh",        
        position: "relative"        
      }}        
    >        
      <iframe        
        className="firstframe"  
        src={`https://web-player.skoopsignage.app/?playlist_id=${playlistId}&backend_url=https://api-v2.skoopsignage.app`}        
        width="100%"        
        height="100%"        
        title="Web Player"        
        style={{   
          opacity: displayMediaUrl ? 0 : 1,   
          visibility: displayMediaUrl ? 'hidden' : 'visible',   
          border: 'none',   
          overflowY: 'scroll',
          overflowX: 'hidden',
          transition: 'opacity 0.25s',  
          position: 'absolute',   
          top: 0,   
          left: 0   
        }}  
        scrolling="yes"       
      />        
      <iframe        
        src="https://thehouseofgreen.wm.store/"        
        width="100%"        
        height="99999px"        
        title="Google"        
        style={{   
          opacity: displayMediaUrl ? 1 : 0,   
          visibility: displayMediaUrl ? 'visible' : 'hidden',   
          border: 'none',   
          overflowY: 'scroll',
          overflowX: 'hidden',
          transition: 'opacity 0.25s',  
          position: 'absolute',   
          top: 0,   
          left: 0   
        }}        
        scrolling="yes" 
      />        
      <Box        
        sx={{        
          position: "absolute",        
          top: 0,        
          left: 0,        
          width: "100%",        
          height: "100%",        
          zIndex: 2        
        }}        
        onClick={handleCardClick}        
        style={{ display: displayMediaUrl ? 'none' : 'block' }}        
      />        
    </Box>        
  );        
};        
        
export default Media;    
