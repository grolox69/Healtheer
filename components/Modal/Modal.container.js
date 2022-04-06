import { connect } from 'react-redux';
import { closeModal } from '../../store/Modal/Modal.action';
import Modal from './Modal.component';

export const mapStateToProps = (state) => {
    return {
        modalOpen: state.ModalReducer.modalOpen
    }
}

export const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)