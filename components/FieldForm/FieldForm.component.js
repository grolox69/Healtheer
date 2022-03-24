import { PureComponent } from 'react';
import Field from '../Field';
import Form from '../Form';

export class FieldForm extends PureComponent {

    get fieldMap() {
        return [
            // // Field
            // {
            //     attr: {
            //         name: __('Email'),
            //         ...
            //     },
            //     events: {
            //         onChange: handleInput,
            //         ...
            //     },
            //     validateOn: [ 'onChange', ... ],
            //     validationRules: {
            //         isRequired: true,
            //         ...
            //     },
            //     ...
            // },
            // // FieldGroup
            // {
            //     attr: { ... }
            //     events: { ... }
            //     fields: [
            //         // Can contain both fields or field groups
            //     ],
            //     ...
            // }
        ];
    }

    getFormProps() {
        return null;
    }

    
    renderTitle(title) {

        if (!title) {
            return null;
        }

        return (
            <h3 className="text-lg leading-6 font-medium text-gray-900">{ title }</h3>
        );
    }

    renderSubTitle(subTitle) {

        if (!subTitle) {
            return null;
        }

        return (
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{ subTitle }</p>
        );
    }
 
    renderSectionFields(section) {
        const { register, formState: { errors }, control } = this.props;

        const {
            fields,
            attr: {
                name = ''
            } = {},
        } = section;
        
        // If contains attr fields then outputs data as fields
        if (Array.isArray(fields)) {
            return fields.map(this.renderSectionFields.bind(this));  
        }

        return <Field { ...{...section, register, errors, control } }  key={ name } />;
    }

    renderSections(section) {
        const {
            title,
            subTitle
        } = section;

        return (
            <div className="bg-gray-100 shadow px-4 py-5 sm:rounded-lg sm:p-6 my-4">
                <div className="md:grid md:grid-cols-3 md:gap-6">     
                    <div className="sm:mb-2 md:col-span-1">
                        { this.renderTitle(title) }
                        { this.renderSubTitle(subTitle) }
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="grid grid-cols-6 gap-6">
                            { this.renderSectionFields(section) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    renderActions() {
        return null;
    }
 
    renderFormBody() {        
        return this.fieldMap.map(this.renderSections.bind(this));
    }

    render() {
        const { 
            handleSubmit, 
            onSubmit,
            title,
            subTitle
        } = this.getFormProps();

        return (
            <Form { ...{ handleSubmit, onSubmit, title, subTitle } } >
                { this.renderFormBody() }
                <div className='m-2'>
                    { this.renderActions() }
                </div>
            </Form>
        );
    }
 }
 
export default FieldForm;
 