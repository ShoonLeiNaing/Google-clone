export const initialState={
    term:null
}



const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
       
        case 'SET_SEARCH_TERMS':
            return {
                ...state,
                term:action.term,
            }
        default :
        return state
    }
}

export default reducer;