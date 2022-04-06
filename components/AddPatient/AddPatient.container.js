import { connect } from 'react-redux';
import { openModal } from '../../store/Modal/Modal.action';
import AddPatient from './AddPatient.component';

export const mapStateToProps = (state) => {
    return {
        modalOpen: state.ModalReducer.modalOpen
    }
}

export const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)