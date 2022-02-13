import { 
    CLOSE_MOBILE_SIDEBAR,
    OPEN_MOBILE_SIDEBAR
} from './Sidebar.action';

const initialState = {
    sidebarOpen : false
}

export default function SidebarReducer(state = initialState, action) {
    switch (action.type) {
        case CLOSE_MOBILE_SIDEBAR:
            return {
                sidebarOpen: action.payload
            }
        case OPEN_MOBILE_SIDEBAR:
            return {
                sidebarOpen: action.payload
            }
        default:
            return state;
    }
}