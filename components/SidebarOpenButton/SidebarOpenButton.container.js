import { connect } from 'react-redux';
import { openMobileSidebar } from '../../store/Sidebar/Sidebar.action';
import SidebarOpenButton from './SidebarOpenButton.component';

export const mapDispatchToProps = (dispatch) => ({
    openMobileSidebar: () => dispatch(openMobileSidebar(true))
})

export default connect(null, mapDispatchToProps)(SidebarOpenButton)