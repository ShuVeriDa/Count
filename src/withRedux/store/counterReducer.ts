export const INC_VALUE = "INC-VALUE"
export const RES_VALUE = "RES-VALUE"
export const MAX_VALUE = "MAX-VALUE"
export const SET_VALUE = "SET-VALUE"
export const START_VALUE = "START-VALUE"
export const DISABLED_BTN_SET = "DISABLED-BTN-SET"
export const CHANGE_VALUES = "CHANGE-VALUES"
export const SET_START_VALUE_FROM_LOCAL_STORAGE = 'SET-START-VALUE-FROM-LOCAL-STORAGE'
export const SET_MAX_VALUE_FROM_LOCAL_STORAGE = 'SET-MAX-VALUE-FROM-LOCAL-STORAGE'


const initialState = {
   counterValue: 0,
   startValue: 0,
   maxValue: 5,
   disabledBtnSet: true,
   changeValues: false
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
   switch (action.type) {
      case INC_VALUE:
         return {
            ...state,
            counterValue: state.counterValue + 1
         }
      case RES_VALUE:
         return {
            ...state,
            counterValue: state.startValue
         }
      case SET_VALUE:
         return {
            ...state,
            counterValue: state.startValue
         }
      case START_VALUE:
         return {
            ...state,
            startValue: action.startValue
         }
      case MAX_VALUE:
         return {
            ...state,
            maxValue: action.maxValue
         }
      case DISABLED_BTN_SET:
         return {
            ...state,
            disabledBtnSet: state.disabledBtnSet
         }
      case CHANGE_VALUES:
         return {
            ...state,
            changeValues: state.changeValues
         }
      case SET_START_VALUE_FROM_LOCAL_STORAGE:
         return {
            ...state,
            startValue: action.startValue
         }
      case SET_MAX_VALUE_FROM_LOCAL_STORAGE:
         return {
            ...state,
            maxValue: action.maxValue
         }
      default:
         return state
   }
}

type ActionType =
   ReturnType<typeof incValueAC> |
   ReturnType<typeof maxValueAC> |
   ReturnType<typeof startValueAC> |
   ReturnType<typeof setValueAC> |
   ReturnType<typeof disabledBtnSetAC> |
   ReturnType<typeof changeValuesAC> |
   ReturnType<typeof setStartValueFromLocalStorage> |
   ReturnType<typeof setMaxValueFromLocalStorage> |
   ReturnType<typeof resValueAC>

export const incValueAC = () => {
   return {
      type: INC_VALUE,
   } as const
}

export const resValueAC = (resValue: number) => {
   return {
      type: RES_VALUE,
      resValue
   } as const
}

export const maxValueAC = (maxValue: number) => {
   return {
      type: MAX_VALUE,
      maxValue
   } as const
}

export const setValueAC = (setValue: number) => {
   return {
      type: SET_VALUE,
      setValue
   } as const
}

export const startValueAC = (startValue: number) => {
   return {
      type: START_VALUE,
      startValue
   } as const
}

export const disabledBtnSetAC = (disabled: boolean) => {
   return {
      type: DISABLED_BTN_SET,
      disabled
   } as const
}

export const changeValuesAC = (changeValues: boolean) => {
   return {
      type: CHANGE_VALUES,
      changeValues
   } as const
}

export const setStartValueFromLocalStorage = (startValue: number) => {
   return {
      type: SET_START_VALUE_FROM_LOCAL_STORAGE,
      startValue
   } as const
}

export const setMaxValueFromLocalStorage = (maxValue: number) => {
   return {
      type: SET_MAX_VALUE_FROM_LOCAL_STORAGE,
      maxValue
   } as const
}