import AlertStatus from "./EAlertStatus";


//action
interface AlertAction {
    type : AlertStatus,
    payload : string //message
}

//inital status
interface AlertReducerStatus{
    currentStatus : AlertStatus,
    message : string
}

function ShowAlertReducer(state: AlertReducerStatus, action: AlertAction){

    const {type , payload} = action

    switch(type){
        case AlertStatus.SUCCESS : 
            return { ...state,
                currentStatus : AlertStatus.SUCCESS,
                message : payload
             };

        case AlertStatus.FAIL : 
            return { ...state,
                currentStatus : AlertStatus.FAIL,
                message : payload
             };

        case AlertStatus.HIDDEN : 
            return { ...state,
                currentStatus : AlertStatus.HIDDEN,
             };

        default : return state;

    }
}

export default ShowAlertReducer;