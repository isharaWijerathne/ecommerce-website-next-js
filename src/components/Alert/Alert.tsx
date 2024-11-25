import React, { useEffect, useReducer, useState } from 'react'
import ShowAlertReducer from './ShowAletReducer'
import AlertStatus from './EAlertStatus'

interface IAlert{
    statusInComing : AlertStatus, //succes or fail
    messageInComing : string,
}

function Alert({statusInComing,messageInComing}:IAlert) {

    const [state, dispatch] = useReducer(ShowAlertReducer,{ currentStatus : AlertStatus.HIDDEN , message : "" })

    
    //const [_statusInComing,_setStatusInComing] = useState<AlertStatus>(statusInComing);


    useEffect(()=>{

        dispatch({
            type : statusInComing , payload : messageInComing 
        })

        //after 3 sec hidden alert
        const closeAlerBox =setInterval(()=>{

            dispatch({
                type : AlertStatus.HIDDEN , payload : "" 
            })

            clearInterval(closeAlerBox)
            

        },3000)

    },[statusInComing])

  return (
        <div>
            <div className="space-y-5">
                {/* success message */}
                {
                    state.currentStatus == AlertStatus.SUCCESS ?
                        <div
                        className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
                        role="alert"
                        tabIndex={-1}
                        aria-labelledby="hs-bordered-success-style-label"
                    >
                        <div className="flex">
                        <div className="shrink-0">
                            {/* Icon */}
                            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            </span>
                            {/* End Icon */}
                        </div>
                        <div className="ms-3">
                            <h3
                            id="hs-bordered-success-style-label"
                            className="text-gray-800 font-semibold dark:text-white"
                            >
                            Successfully updated.
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-neutral-400">
                                {state.message}
                            </p>
                        </div>
                        </div>
                        </div>
                    : state.currentStatus == AlertStatus.FAIL ?
                    <div
                    className="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30"
                    role="alert"
                    tabIndex={-1}
                    aria-labelledby="hs-bordered-red-style-label"
                >
                    <div className="flex">
                    <div className="shrink-0">
                        {/* Icon */}
                        <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                        <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        </span>
                        {/* End Icon */}
                    </div>
                    <div className="ms-3">
                        <h3
                        id="hs-bordered-red-style-label"
                        className="text-gray-800 font-semibold dark:text-white"
                        >
                        Error!
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-neutral-400">
                        {state.message}
                        </p>
                    </div>
                    </div>
                    </div>
                    :state.currentStatus == AlertStatus.HIDDEN ?
                        ""
                    : ""
                }
            
                
            </div>
        </div>
  )
}

export default Alert