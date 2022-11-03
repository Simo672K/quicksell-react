import Grid from '../utils/Grid'
import StepsCard from './StepsCard'
import Step1 from "../assets/images/step1phoneinhand.png"
import Step2 from "../assets/images/step2quota.png"
import Step3 from "../assets/images/step3getpaid.png"

function StepsDivider() {
  const steps = [{
    stepNum: 1,
    stepImg: Step1,
    stepTitle: "Upload The items",
    stepSubtitle: "Add a picture and other info"
  },
  {
    stepNum: 2,
    stepImg: Step2,
    stepTitle: "Get a free quote",
    stepSubtitle: "in 30 mints"
  },
  {
    stepNum: 3,
    stepImg: Step3,
    stepTitle: "Complete and get paid",
    stepSubtitle: "Get paid as you like"
  }]
  return (
    <Grid className='grid-cols-3 divide-x items-end'>
      {
        steps.map(step =>
          <StepsCard key={step.stepNum} num={step.stepNum} image={step.stepImg} title={step.stepTitle} subtitle={step.stepTitle} />
        )
      }
    </Grid>
  )
}

export default StepsDivider