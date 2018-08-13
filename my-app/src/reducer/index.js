export default (state, action) => {
	switch (action.type) {
		 case "UPDATE_NAME_FILTER":
			 console.log(state,action);
			toggleArrayItem(state.filter.account,action.value)
			 const type = state.filter.type;
			return {
				...state
			}
			state;
			break;
		case "deposit-money":
			 //do something
			break;
		default:
			return state;
			 }
}


function toggleArrayItem(a, v) {
	console.log(a);
	
    var i = a.indexOf(v);
    if (i === -1)
        a.push(v);
    else
		a.splice(i,1);
	
	// return { ...a};
}