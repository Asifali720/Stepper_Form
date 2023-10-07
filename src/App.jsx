import { useState } from 'react'
import Stepper from './section/Stepper'
import { StapperContext } from './Contexts/StepperContext'
import SteeperControl from './section/SteeperControl'
import Step1 from './component/Step1'
import Step2 from './component/Step2'
import Step3 from './component/Step3'
import Finish from './component/Finish'
import './global.css'

function App() {
 const [ currentStep , setCurrentStep ] = useState(1)
 const [userData, setUserData] = useState('')
 const [finalData, setFinalData] = useState([])
const Steps = [
  'step1',
  'step2',
  'step3',
  'finish'
]
const displayStep = (Step)=>{
  switch(Step){
    case 1:
     return <Step1/>
    case 2:
      return <Step2/>
    case 3:
      return <Step3/>
    case 4:
      return <Finish/>
    default:
  }
}
const handleOnClick = (direction) =>{
  let newStep = currentStep
  direction === 'next'? newStep++ : newStep--
  newStep > 0 && newStep <= Steps.length && setCurrentStep(newStep)
}
  return (
    <div className='w-full max-w-[1200px] mx-auto rounded-2xl shadow-2xl lg:p-8 mt-20'>
      <form action='#' name='stepper form' netlify>

     
      <div>
      <Stepper step={Steps} currentStep={currentStep}/>  
      <StapperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
      }}>
       
          {displayStep(currentStep)}
        
        </StapperContext.Provider>
      </div>
    <div>
      {
        currentStep === Steps.length ? '' : (<SteeperControl handleOnClick={handleOnClick} step={Steps} currentStep={currentStep}/> )
      }
     
    </div>
    </form>
    </div>
  )
}

export default App
