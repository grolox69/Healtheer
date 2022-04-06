import FIELD_TYPE from '../Field/Field.config';
 
export const patientInformationFields = (props) => {
    
    const {
        fullName,
        emergencyEmail,
        dateOfBirth,
        gender,
        country,
        city,
        street,
        appartment,
        bloodType,
        condition,
        history,
        medications
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
            title: 'Personal Address',
            subTitle: 'Please fill in the right address.',
            fields: [
                {
                    type: FIELD_TYPE.select,
                    label: 'Country',
                    attr: {
                        name: 'country',
                        defaultValue: country,
                        placeholder: 'Your country'
                    },
                    options: [],
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: 'City',
                    attr: {
                        name: 'city',
                        defaultValue: city,
                        placeholder: 'Your city'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: 'Street',
                    attr: {
                        name: 'street',
                        defaultValue: street,
                        placeholder: 'Your street'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: 'Appartment',
                    attr: {
                        name: 'appartment',
                        defaultValue: appartment,
                        placeholder: 'Your appartment'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
            ]
        },
        {
            title: 'Medical Records',
            subTitle: 'Try to be precise in what you write.',
            fields: [
                {
                    type: FIELD_TYPE.text,
                    label: 'Blood type',
                    attr: {
                        name: 'bloodType',
                        defaultValue: bloodType,
                        placeholder: 'Your blood type'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: 'Condition',
                    attr: {
                        name: 'condition',
                        defaultValue: condition,
                        placeholder: 'Your condition'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: 'History',
                    attr: {
                        name: 'history',
                        defaultValue: history,
                        placeholder: 'Your history'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: 'Medications',
                    attr: {
                        name: 'medications',
                        defaultValue: medications,
                        placeholder: 'Your medications'
                    },
                    validateOn: ['onChange'],
                    validationRule: {
                        required: "This field is required"
                    }
                },
            ]
        },
    ];
};
