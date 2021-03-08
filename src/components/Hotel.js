import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

let useStyles = makeStyles({
  card: {
    margin: "20px",
  },
});

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
          <Box flexGrow={1}>
            <Typography>{hotel.name}</Typography>
          </Box>
          <Box>
            {" "}
            <Typography>{hotel.rate}</Typography>
          </Box>
        </Box>
        <Typography variant="caption">{hotel.address}</Typography>
      </CardContent>
    </Card>
  );
}

export default Hotel;
