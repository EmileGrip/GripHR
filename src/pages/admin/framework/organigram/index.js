import React, {useState} from "react";
import { OrganigramStepOne, OrganigramStepTwo } from "components";
import { useOutletContext } from "react-router-dom";

export const AdminOrganigram = (props) => {
    let changeShow = useOutletContext()
    let [step, setStep] = useState(1)
    let changeStep = () => {
        setStep(step +1)
    }

    let _renderStep = () => {
        switch (step){
            case 1:
                return <OrganigramStepOne changeStep={changeStep} changeShow={changeShow}/>
            case 2:
                return <OrganigramStepTwo changeStep={changeStep}/>
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
