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
    alignItems: "center",
    "&:hover": { backgroundColor: "#ddd" },
  },

  text: {
    fontSize: 13,
  },
  cardMedia: {
    width: 45,
    marginRight: 12,
    objectFit: "cover",
    borderRadius: 3,
    height: 30,
    backgroundColor: "white",
    padding: 0.2,
  },
}));
