import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ activeCategory, setActiveCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { xs: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((item) => (
      <button
        className="feed-pill"
        onClick={() => setActiveCategory(item.name)}
        style={{
          background: item.name === activeCategory ? "#00b0ff" : "transparent",
          color: "#ffffff",
        }}
        key={item.name}
      >
        <span 
          style={{ 
            color: item.name === activeCategory ? "#ffffff" : "#00b0ff", 
            marginRight: "16px",
            display: "flex",
            alignItems: "center"
          }}
        >
          {item.icon}
        </span>
        
        <span style={{ opacity: item.name === activeCategory ? "1" : "0.85", fontWeight: item.name === activeCategory ? "700" : "400" }}>
          {item.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;