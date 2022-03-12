import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./styles";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DragAndDropContent } from "./components/DragAndDropContent";
import { DragAndDropProvider } from "./contexts/DragaAndDropContext";

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <DragAndDropProvider>
        <DragAndDropContent />
      </DragAndDropProvider>
      {/* Footer */}
      <Footer className={classes.footer} />
      {/* End footer */}
    </>
  );
}
