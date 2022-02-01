import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Carousel from '../carousel.component';

export default function ActionAreaCard({className, openModal}) {
  return (
    <Card className={className} sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <Carousel/>
        <CardContent sx={{backgroundColor:'rgba(255,255,205, 0.4)'}} >
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