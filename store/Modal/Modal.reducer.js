import { 
    CLOSE_MODAL,
    OPEN_MODAL
} from './Modal.action';

export const getInitialState = () => ({
    modalOpen : false
});

export default function ModalReducer(state = getInitialState(), action) {
    switch (action.type) {
        case CLOSE_MODAL:
            return {
                modalOpen: action.payload
            }
        case OPEN_MODAL:
            return {
                modalOpen: action.payload
            }
        default:
            return state;
    }
};