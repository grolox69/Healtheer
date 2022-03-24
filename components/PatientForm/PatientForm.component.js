import FieldForm from "../FieldForm";
import { patientInformationFields } from "./PatientForm.form";
import withUseForm from '../../util/Forms/withUseForm';

export class PatientForm extends FieldForm {  
    
    // fetch default field values
    get patientInformationFieldMap() {
        // const {
        //     patient: {
        //         firstname = '',
        //         lastname = '',
        //         email = ''
        //     }
        // } = this.props;

        return patientInformationFields({
            firstname: '',
            lastname: '',
            email: ''
        });
    }

    getFormProps() {
        return {...this.props}
    }

    renderFormBody() {
        return this.patientInformationFieldMap.map(this.renderSections.bind(this));
    }

    renderActions() {
        return (
            <div className="col-span-6">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

export default withUseForm(PatientForm);