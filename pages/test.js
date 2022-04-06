import { PureComponent } from "react";
import Modal from '../components/Modal'
import PatientForm from '../components/PatientForm'
import AddPatient from '../components/AddPatient'

export class Test extends PureComponent {

    render() {
        return ( 
            <>
                <Modal>
                    <PatientForm />  
                </Modal>
                <AddPatient />
            </>
        )
    }
}

export default Test