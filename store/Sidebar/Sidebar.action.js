// Action Types
export const CLOSE_MOBILE_SIDEBAR = 'CLOSE_MOBILE_SIDEBAR';
export const OPEN_MOBILE_SIDEBAR = 'OPEN_MOBILE_SIDEBAR';

// Action Creators
export const closeMobileSidebar = (sidebarOpen) => {
    return {
        type: "CLOSE_MOBILE_SIDEBAR",
        payload: sidebarOpen
    }
};

export const openMobileSidebar = (sidebarOpen) => {
    return {
        type: "OPEN_MOBILE_SIDEBAR",
        payload: sidebarOpen
    }
};