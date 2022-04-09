import FIELD_TYPE from "../Field/Field.config";
import getCountries from "../../util/Countries/listOfCountries";
 
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
            title: "Personal Information",
            subTitle: "This information will be displayed publicly so be careful what you share.",
            fields: [
                {
                    type: FIELD_TYPE.text,
                    label: "Full name",
                    attr: {
                        name: "fullName",
                        defaultValue: fullName,
                        placeholder: "Patient's full name"
                    },
                    validateOn: ["onChange"],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.email,
                    label: "Emergency Email address",
                    attr: {
                        name: "emergencyEmail",
                        defaultValue: emergencyEmail,
                        placeholder: "Patient's emergency email address"
                    },
                    
                    validateOn: ["onChange"],
                    validationRule: {
                        required: "This field is required",
                        pattern: {
                            value: /(.+)@(.+){2,}\.(.+){2,}/,
                            message: "Please enter a valid email address" 
                        }
                    }
                },
                {
                    type: FIELD_TYPE.date,
                    label: "Date of Birth",
                    attr: {
                        name: "dateOfBirth",
                        defaultValue: dateOfBirth,
                        placeholder: "Patient's date of birth (mm/dd/yyyy)"
                    },
                    validateOn: ["onChange"],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.select,
                    label: "Gender",
                    attr: {
                        name: "gender",
                        defaultValue: gender,
                        placeholder: "Patient's gender"
                    },
                    options: ["Male", "Female", "Other"],
                    validateOn: ["onChange"],
                    validationRule: {
                        required: "This field is required"
                    }
                },
            ]
        },
        {
            title: "Personal Address",
            subTitle: "Please fill in the right address.",
            fields: [
                {
                    type: FIELD_TYPE.select,
                    label: "Country",
                    attr: {
                        name: "country",
                        defaultValue: country,
                        placeholder: "Patient's country"
                    },
                    options: getCountries(),
                    validateOn: ["onChange"],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: "City",
                    attr: {
                        name: "city",
                        defaultValue: city,
                        placeholder: "Patient's city"
                    },
                    validateOn: ["onChange"],
                    validationRule: {
                        required: "This field is required"
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: "Street",
                    attr: {
                        name: "street",
                        defaultValue: street,
                        placeholder: "Patient's street"
                    },
                    validateOn: ["onChange"],
                    validationRule: {
                        
                    }
                },
                {
                    type: FIELD_TYPE.text,
                    label: "Appartment",
                    attr: {
                        name: "appartment",
                        defaultValue: appartment,
                        placeholder: "Patient's appartment"
                    },
                    validateOn: ["onChange"],
                    validationRule: {
                        
                    }
                },
            ]
        },
        // {
        //     title: "Medical Records",
        //     subTitle: "Try to be precise in what you write.",
        //     fields: [
        //         {
        //             type: FIELD_TYPE.text,
        //             label: "Blood type",
        //             attr: {
        //                 name: "bloodType",
        //                 defaultValue: bloodType,
        //                 placeholder: "Patient's blood type"
        //             },
        //             validateOn: ["onChange"],
        //             validationRule: {
        //                 required: "This field is required"
        //             }
        //         },
        //         {
        //             type: FIELD_TYPE.text,
        //             label: "Condition",
        //             attr: {
        //                 name: "condition",
        //                 defaultValue: condition,
        //                 placeholder: "Patient's condition"
        //             },
        //             validateOn: ["onChange"],
        //             validationRule: {
        //                 required: "This field is required"
        //             }
        //         },
        //         {
        //             type: FIELD_TYPE.text,
        //             label: "History",
        //             attr: {
        //                 name: "history",
        //                 defaultValue: history,
        //                 placeholder: "Patient's history"
        //             },
        //             validateOn: ["onChange"],
        //             validationRule: {
        //                 required: "This field is required"
        //             }
        //         },
        //         {
        //             type: FIELD_TYPE.text,
        //             label: "Medications",
        //             attr: {
        //                 name: "medications",
        //                 defaultValue: medications,
        //                 placeholder: "Patient's medications"
        //             },
        //             validateOn: ["onChange"],
        //             validationRule: {
        //                 required: "This field is required"
        //             }
        //         },
        //     ]
        // },
    ];
};
