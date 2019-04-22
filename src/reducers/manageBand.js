export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case "ADD_BAND":
    // console.log("Added the band", action.payload.name)
    console.log("should be returning", {...state, bands: state.bands.concat(action.payload.name)})
    return ({...state, bands: state.bands.concat(action.payload.name)})

    default:
      return state
  }
};
