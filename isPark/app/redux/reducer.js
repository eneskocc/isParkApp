import * as $ from './actions';

const initialState = {
  PARK: [],
  GET_PARK_REQUEST_STATUS: 0,
  GET_PARK_REQUEST_ERROR: false,

  PARK_ID: [],
  GET_PARK_ID_REQUEST_STATUS: 0,
  GET_PARK_ID_REQUEST_ERROR: false,
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case $.GET_PARK_REQUEST: {
      return {
        ...state,
        GET_PARK_REQUEST_STATUS: 1,
      };
    }
    case $.GET_PARK_REQUEST_SUCCESS: {
      return {
        ...state,
        GET_PARK_REQUEST_STATUS: 2,
        PARK: action.PARK,
      };
    }
    case $.GET_PARK_REQUEST_FAILURE: {
      return {
        ...state,
        GET_PARK_REQUEST_STATUS: 3,
        GET_PARK_REQUEST_ERROR: action.ERROR,
      };
    }
    case $.GET_PARK_REQUEST_END: {
      return {
        ...state,
        GET_PARK_REQUEST_STATUS: 0,
      };
    }

    case $.GET_PARK_ID_REQUEST: {
      return {
        ...state,
        GET_PARK_ID_REQUEST_STATUS: 1,
      };
    }
    case $.GET_PARK_ID_REQUEST_SUCCESS: {
      return {
        ...state,
        GET_PARK_ID_REQUEST_STATUS: 2,
        PARK_ID: action.PARK_ID,
      };
    }
    case $.GET_PARK_ID_REQUEST_FAILURE: {
      return {
        ...state,
        GET_PARK_ID_REQUEST_STATUS: 3,
        GET_PARK_ID_REQUEST_ERROR: action.ERROR,
      };
    }
    case $.GET_PARK_ID_REQUEST_END: {
      return {
        ...state,
        GET_PARK_ID_REQUEST_STATUS: 0,
      };
    }

    
    default:
      return state;
  }
};

export {reducer};
