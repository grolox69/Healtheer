import { connect } from 'react-redux';
import { closeMobileSidebar } from '../../store/Sidebar/Sidebar.action';
import SidebarCloseButton from './SidebarCloseButton.component';

export const mapDispatchToProps = (dispatch) => ({
    closeMobileSidebar: () => dispatch(closeMobileSidebar(false))
})

export default connect(null, mapDispatchToProps)(SidebarCloseButton)