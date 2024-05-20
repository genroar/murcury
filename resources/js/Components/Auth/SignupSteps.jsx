import { useState } from "react";
import OnBoardingOne from "./OnBoardingOne";

export default function SignupSteps() {
    const [steps, setSteps] = useState([
        { name: "Step 1", isActive: true },
        { name: "Step 2", isActive: false },
        { name: "Step 3", isActive: false },
    ]);
    return (
        <>
            <OnBoardingOne />
        </>
    );
}
