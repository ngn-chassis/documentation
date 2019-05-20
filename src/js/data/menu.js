const SectionConfigModel = new NGN.DATA.Model({
  fields: {
    key: String,
    label: String
  },

  relationships: {
    children: [new NGN.DATA.Model({
      fields: {
        key: String,
        label: String
      }  
    })]
  }
})

const MenuStore = new NGN.DATA.Store({
  model: SectionConfigModel
})
