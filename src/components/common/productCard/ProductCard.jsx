import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
{item.description
}        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
   <Link to={`/itemDetail/${item.id}`}>
      <Button size="small" variant="container">Ver detalles</Button>
      </Link>

    </CardActions>
  </Card>

  );
};

export default ProductCard;
