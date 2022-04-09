import { PureComponent } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FIELD_TYPE } from './Field.config';
import { Controller } from 'react-hook-form'
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Field extends PureComponent {
    renderMap = {
        // Default input
        [FIELD_TYPE.email]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.text]: this.renderDefaultInput.bind(this),
        [FIELD_TYPE.password]: this.renderDefaultInput.bind(this),
    
        // Custom fields
        [FIELD_TYPE.date]: this.renderDatePicker.bind(this),
        [FIELD_TYPE.select]: this.renderSelect.bind(this),
        [FIELD_TYPE.textarea]: this.renderTextArea.bind(this),
        [FIELD_TYPE.number]: this.renderNumber.bind(this)

    };
     
    renderDefaultInput() {
        const {
            type, 
            attr,
            validationRule,
            register
        } = this.props;

        return (
            <input
                type={ type }
                name={ attr.name }
                {...register(attr.name, {...validationRule})}
                { ...attr }
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                autoComplete
            />
        );
    }
 
    renderDatePicker() {
        const {
            type, 
            attr,
            validationRule,
            control
        } = this.props;
        
        return (
            <Controller
                control={control}
                name={ attr.name }
                type={ type }
                rules={ {...validationRule} }
                render={({
                    field: { onChange, value },
                }) => (
                    <ReactDatePicker 
                        selected={value}
                        onChange={onChange}
                        placeholderText={ attr.placeholder }
                        maxDate={ new Date() }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                )}
            />
           
        );
    }
 
    renderNumber() {
        return (
            <></>
        );
    }
 
    renderSelect() {
        const {
            type, 
            attr,
            validationRule,
            control,
            options
        } = this.props;

        return (
            <Controller
                type={ type }
                name={ attr.name }
                control={control}
                rules={ {...validationRule} }
                render={({
                    field: { onChange, value, },
                }) => (
                    <select
                        type={ type }
                        name={ attr.name }
                        defaultValue=""
                        value={value}
                        onChange={onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                        <option value="" disabled>Select your option</option>
                        {options.map((option, id) => {
                            return <option key={id} value={option}> {option} </option>
                        })}
                    </select>
                )}
                
            />
            
        );
    }

    renderTextArea() {
        return (
            <></>
        );
    }

    renderRequired() {
        const { validationRule: { required } = {} } = this.props;
        
        if (!required) {
            return null;
        }

        return " * "
    }

    // Text/Labels RENDER
    renderLabel() {
        const { type, label, attr: { name } = {}, validationRule: { required } = {} } = this.props;

        if (!label) {
            return null;
        }

        return (
            <>
                <label htmlFor={ name || `input-${type}` } className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    { label }
                    {this.renderRequired()}
                </label>
            </>
        );
    }

    renderErrorMessages() {
        const {
            errors,
            attr: { name }
        } = this.props;

        if (!Object.keys(errors).length) {
            return null;
        }
        
        return (
            <>
                <ErrorMessage 
                    errors={errors}
                    name={name}
                    render={({message}) => <p className="absolute text-red-400 text-sm mt-1 pb-1">{message}</p>}
                />
            </>
        );
    }

    renderFieldGroup(type) {
        const inputRenderer = this.renderMap[type];
        return (
            <div className="col-span-6 sm:col-span-6">
                { type !== FIELD_TYPE.checkbox && type !== FIELD_TYPE.radio && this.renderLabel() }
                { inputRenderer && inputRenderer() }
                {this.renderErrorMessages()}
                
            </div>
        )
    }
 
    render() {
        const { type } = this.props;

        return this.renderFieldGroup(type);
    }
}
 
export default Field;
 