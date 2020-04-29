import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import "./Filters.css";

const Filters = (props) => {
    console.log(props)


    const [activeStep, setActiveStep] = useState(0);
    const [currency, setCurrency] = React.useState('EUR');


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleInputChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            <form noValidate autoComplete="off">
                {(activeStep === 0) && <div>
                    <InputLabel>Year of study</InputLabel>
                    <Select
                        defaultValue="all"
                        onChange={handleInputChange}
                        name="anStudiu"
                    >
                        <MenuItem value="I">I</MenuItem>
                        <MenuItem value="II">II</MenuItem>
                        <MenuItem value="III">III</MenuItem>
                        <MenuItem value="all">All</MenuItem>
                    </Select>
                </div>
                }
                {(activeStep === 1) && <div>
                    <InputLabel>Select exams period</InputLabel>
                    <Select
                        defaultValue="both"
                        onChange={handleInputChange}
                        name="sesiune"
                    >
                        <MenuItem value="summer">Summer</MenuItem>
                        <MenuItem value="winter">Winter</MenuItem>
                        <MenuItem value="all">All</MenuItem>
                    </Select>
                </div>
                }
            </form>
            <MobileStepper
                variant="dots"
                steps={2}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button onClick={handleNext} disabled={activeStep === 1}>
                        Next
                    <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
            </Button>
                }
            />
        </div>
    );
};

export default Filters;