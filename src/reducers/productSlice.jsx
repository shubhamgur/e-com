import { createSlice } from '@reduxjs/toolkit'


const initialState= {
  value: [],
  card:[],
  Userlogin:false,

}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addingData: (state, action) => {
      state.value=[...action.payload]
    },
    delateValue:(state, action)=>{
      state.value=[]
    },
    loginCondition: (state) => {
      state. Userlogin = true;
    },
    loginConditionLogout : (state ) => {
      state. Userlogin = false;
    },
    addCards: (state, action) =>{
      state.card.push(action.payload);
    },
    addedItem:(state, action) =>{
      for(let i=0;i<state.value.length;i++){
        if(state.value[i].id===action.payload){
          state.value[i].added=true;
        }
      }
    },
    deleteItemCard:(state, action)=>{
      for(let i=0;i<state.value.length;i++){
        if(state.value[i].id===action.payload){
          state.value[i].added=false;
        }
      }
    },
deleteCart:(state, action) =>{
  state.card.splice(action.payload,1)
},
cardEmpty:(state, action) =>{
  state.card=[]
}
  },
})

export const { loginCondition, loginConditionLogout, addingData ,addCards ,addedItem
 ,deleteCart, cardEmpty, delateValue,deleteItemCard,baynow} = productSlice.actions
export default productSlice.reducer