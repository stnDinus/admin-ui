import { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";

import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { ThemeContext } from "../../../context/themeContext";

const Stepper = (props) => {
  const { desc } = props;

  const theme = useTheme();

  const { theme: themeMode } = useContext(ThemeContext);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const dataNum = desc.length;

  return (
    <>
      <div>{desc[activeStep]}</div>
      <MobileStepper
        variant="dots"
        steps={dataNum}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          "& .MuiMobileStepper-dot": { backgroundColor: "darkgray" },
          "& .MuiMobileStepper-dotActive": { backgroundColor: themeMode.color },
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === dataNum - 1}
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Previous
          </Button>
        }
      />
    </>
  );
};

export default Stepper;
