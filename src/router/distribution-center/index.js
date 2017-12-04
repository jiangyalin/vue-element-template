import DistributionCenter from '@/components/distribution-center/index.vue'
import index from '@/page/distribution-center/property/PropertyList.vue'
import property from './property'

export default {
  path: '/distributionCenter',
  component: DistributionCenter,
  children: [
    {
      path: '',
      component: index
    },
    property
  ]
}
