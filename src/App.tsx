import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./styles";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DragAndDropContext } from "./components/DragAndDropContent";
import { exampleData } from "./data/example";

export default function App() {
  const classes = useStyles();
  console.log(exampleData);
  return (
    <>
      <CssBaseline />
      <Header />
      <DragAndDropContext />
      {/* Footer */}
      <Footer className={classes.footer} />
      {/* End footer */}
    </>
  );
}
