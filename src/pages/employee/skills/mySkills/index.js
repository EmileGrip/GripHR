import React, {useState} from "react";

import { MySkillsStepOne, MySkillsStepTwo } from "components";

export const MySkills = (props) => {
    let [step, setStep] = useState(1)
    let changeStep = () => {
        setStep(step +1)
    }

    let _renderStep = () => {
        switch (step){
            case 1:
                return <MySkillsStepOne changeStep={changeStep} />
            case 2:
                return <MySkillsStepTwo changeStep={changeStep} />
            default:
                return
        }
    }

    return (
        <>
            {_renderStep()}
        </>
    )
}
