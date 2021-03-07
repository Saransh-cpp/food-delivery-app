import { Chip } from "@material-ui/core";
import React from "react";

export default function ChipView() {
  return (
    <div>
      {["Pro", "Cuisines", "Dessert", "Khatta", "Meetha"].map((item, index) => {
        return <Chip variant="outlined" label={item} key={index} style={{
            margin: "16px 2px"
        }}/>;
      })}
    </div>
  );
}
