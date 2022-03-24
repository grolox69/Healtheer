import FIELD_TYPE from '../Field/Field.config';
 
export const patientInformationFields = (props) => {
    
    const {
        fullName,
        emergencyEmail,
        dateOfBirth,
        gender,
    } = props;
 
    return [
        {
            title: 'Personal Information',
            subTitle: 'This information will be displayed publicly so be careful what you share.',
            fields: [
                {
                    type: FIELD_TYPE.text,
                    label: 'Full name',
                    attr: {
                        name: 'fullName',
                        defaultValue: fullName,
                        placeholder: 'Your full name'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.email,
                    label: 'Emergency Email address',
                    attr: {
                        name: 'emergencyEmail',
                        defaultValue: emergencyEmail,
                        placeholder: 'Your emergency email address'
                    },
                    
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required",
                        pattern: {
                            value: /(.+)@(.+){2,}\.(.+){2,}/,
                            message: 'Please enter a valid email address' 
                        }
                    }
                },
                {
                    type: FIELD_TYPE.date,
                    label: 'Date of Birth',
                    attr: {
                        name: 'dateOfBirth',
                        defaultValue: dateOfBirth,
                        placeholder: 'Your date of birth (mm/dd/yyyy)'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.select,
                    label: 'Gender',
                    attr: {
                        name: 'gender',
                        defaultValue: gender,
                        placeholder: 'Your gender'
                    },
                    options: ["Male", "Female", "Other"],
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
            ]
        },
        {
            title: 'Medical Records',
            subTitle: 'Be careful what you write here.',
            fields: [
                {
                    type: FIELD_TYPE.text,
                    label: 'Full name',
                    attr: {
                        name: 'fullName',
                        defaultValue: fullName,
                        placeholder: 'Your full name'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
            ]
        }
    ];
};
