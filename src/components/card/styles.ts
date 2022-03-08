import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  cardItem: {
    padding: ".5rem",
    border: "1px solid #d5d8da",
    marginBottom: "1rem",
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-around",
    transition: "all .4s ease-in",

    "&:hover": { backgroundColor: "#ddd" },
    "&:focus": { backgroundColor: "#ddd", border: "2px solid #23292f" },
  },

  cardItemActve: {
    border: "2px solid #23292f",
    backgroundColor: "#d5d8da",
  },
  cardMedia: {
    width: 50,
    marginRight: 12,
    objectFit: "cover",
    borderRadius: 3,
    height: 40,
    backgroundColor: "white",
    padding: 0.2,
  },
}));
