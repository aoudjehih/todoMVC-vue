import HeaderItem from '@/components/molecules/subscription/header-item'
import FirstStep from '@/components/organisms/subscription/first-step-form'
import SecondStep from '@/components/organisms/subscription/second-step-form'
import ThirdStep from '@/components/organisms/subscription/third-step-form'
import FourthStep from '@/components/organisms/subscription/fourth-step-form'
import FifthStep from '@/components/organisms/subscription/fifth-step-form'

export default {
  name: 'subscription-page',
  components: {
    HeaderItem,
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
		increment(){
		  this.step ++
    },
    congradulation() {
		  alert('Bravo '+this.$refs.firstStep.firstStep.email)
    }
  },
}
