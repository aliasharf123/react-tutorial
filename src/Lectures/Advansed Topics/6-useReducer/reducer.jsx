export const reducer = (state , action) =>{
    if(action.type=== "ADD_PERSON"){
      const newPeople = [...state.people , action.patLoad]
      return( {
        ...state ,
        people: newPeople,
        showModel: true,
        modelContent: "person ADD"
      })
    }
    else if(action.type=== "FILL"){
      return( {
        ...state ,
        people: state.people,
        showModel: true,
        modelContent: "Fill name"
      })
    }else if(action.type=== "ClOSED_MODEL"){
      return( {
        ...state ,
        showModel: false
      })
    }else if(action.type=== "REMOVE_PERSON"){
      const newPeople = state.people.filter((person) => person.id !== action.patLoad);
      return( {
        ...state ,
        people: newPeople
      })
    }
    return state
}