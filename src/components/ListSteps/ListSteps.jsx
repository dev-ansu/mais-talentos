import "./list-steps.css";

const ListSteps = ({steps, actualStep, handleSetStepByClick})=>{
    return (
        <div id="list-step" className="d-flex cursor-pointer justify-content-between align-items-center">
            {steps.map((el, i)=>(
                <div key={i} onClick={()=> handleSetStepByClick(i)} className="d-flex flex-row-reverse gap-1 ">
                    <div className={`d-flex gap-2 justify-content-center step-info ${actualStep == i ? "step-active":''} align-items-center`}>
                        <div className={`circle text-secondary ${actualStep == i ? "circle-active":"" }`}>{el.icon}</div>
                        <h2 className={`fs-5 text-secondary`}> {el.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListSteps;