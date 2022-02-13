import { connect } from 'react-redux';
import { closeMobileSidebar } from '../../store/Sidebar/Sidebar.action';
import Sidebar from './Sidebar.component';

export const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.SidebarReducer.sidebarOpen
    }
}

export const mapDispatchToProps = (dispatch) => ({
    closeMobileSidebar: () => dispatch(closeMobileSidebar(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)