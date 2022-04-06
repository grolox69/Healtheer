// Action types
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

// Action creators
export const closeModal = (modalOpen) => {
    return {
        type: "CLOSE_MODAL",
        payload: modalOpen
    }
};

export const openModal = (modalOpen) => {
    return {
        type: "OPEN_MODAL",
        payload: modalOpen
    }
};