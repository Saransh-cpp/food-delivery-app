import { Box, Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
    card : {
        margin: "20px"
    }
})

function Hotel({ hotel }) {

let classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        src={"http://localhost:5000" + hotel.path.substring(1)}
      ></CardMedia>
      <CardContent>
        <Box display="flex">
          <Box flexGrow={1}>{hotel.name}</Box>
          <Box>{hotel.rate}</Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Hotel;
