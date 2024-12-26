import ResponsiveAppBar from "./components/navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ComboBox from "./components/combobox";
import IconLabelButtons from "./components/button";
import MusicPlayerSlider from "./components/player";
import RowRadioButtonsGroup from "./components/radio";
import AnchorTemporaryDrawer from "./components/anchor";
import SimpleAlert from "./components/alert";
import BasicTable from "./components/table";

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <ComboBox />
        <IconLabelButtons />
        <MusicPlayerSlider />
        <RowRadioButtonsGroup />
        <AnchorTemporaryDrawer />
        <SimpleAlert />
        <BasicTable />
      </ThemeProvider>
    </>
  );
}
