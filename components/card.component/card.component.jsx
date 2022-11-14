import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "../carousel.component";

export default function ActionAreaCard({ className, images }) {
  return (
    <Card className={className} sx={{ maxWidth: 345 }}>
      <CardActionArea data-aos="fade-up-right">
        <Carousel images={images} />
        <CardContent
          data-aos="zoom-in"
          sx={{
            backgroundColor: "background-color: rgba(249, 230, 226, 0.3);",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            BIENVENIDOS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Querido lector, te doy una calida bienvenida...(más)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
