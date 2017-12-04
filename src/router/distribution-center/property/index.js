import index from '@/page/distribution-center/property/PropertyList.vue'

export default {
  path: 'property',
  component: index,
  children: [
    {
      path: '',
      component: index
    }
  ]
}
