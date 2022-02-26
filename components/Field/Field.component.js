import { PureComponent } from 'react';
import withUseForm from '../../util/Forms/withUseForm';
import { FIELD_TYPE } from './Field.config';

export class Field extends PureComponent {
    renderMap = {
        // Default input
        [FIELD_TYPE.email]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.text]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.time]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.dateTime]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.date]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.password]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.submit]: this.renderDefaultInput.bind(this),

        // Custom fields
        [FIELD_TYPE.file]: this.renderFile.bind(this),
        [FIELD_TYPE.select]: this.renderSelect.bind(this),
        [FIELD_TYPE.textarea]: this.renderTextArea.bind(this),
        [FIELD_TYPE.number]: this.renderNumber.bind(this)

    };
 
     
    renderDefaultInput() {
        const {
            type, attr: { name }
        } = this.props;

        return (
            <input
                type={ type }
                name={ name }

                { ...attr }
            />
        );
    }
 
    renderFile() {

        return (
            <></>
        );
    }
 
    renderNumber() {
        return (
            <></>
        );
    }
 
    renderSelect() {
        return (
            <></>
        );
    }

    renderTextArea() {
        return (
            <></>
        );
    }
    
    // Renders fields label with field
    renderLabel() {
        const { type, label, attr: { name } = {} } = this.props;

        if (!label) {
            return null;
        }

        return (
            <label htmlFor={ name || `input-${type}` } className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                { label }
            </label>
        );
    }
 
    render() {
        const { type } = this.props;
        const inputRenderer = this.renderMap[type];

        return (
            <div>
                <div>
                    { type !== FIELD_TYPE.checkbox && type !== FIELD_TYPE.radio && this.renderLabel() }
                    { inputRenderer && inputRenderer() }
                </div>
            </div>
        );
    }
}
 
export default withUseForm(Field);
 