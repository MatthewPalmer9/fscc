const validation = (values: any) => {

    const errors = {} as any;

    if(!values.firstName) {
        errors.firstName="First name required.";
    } else if(values.firstName.length < 4) {
        errors.firstName="First name length has a minimum of 4 characters.";
    };

    if(!values.lastName) {
        errors.lastName="Last name required.";
    } else if(values.lastName.length < 4) {
        errors.lastName="Last name length has a minimum of 4 characters.";
    };

    const EMAIL_REGEX = /\S+@\S+\.\S+/
    if(!values.email) {
        errors.email="Email required."
    } else if(!EMAIL_REGEX.test(values.email)) {
        errors.email="Email is invalid.";
    };

    if(!values.address) {
        errors.address="Address required."
    }

    if(!values.city) {
        errors.city="City required."
    }

    if(!values.state) {
        errors.state="State required."
    }

    if(!values.zip) {
        errors.zip="Zip Code required."
    }

    const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if(!values.cellPhone) {
        errors.cellPhone="Cell phone number required."
    } else if(!PHONE_REGEX.test(values.cellPhone)) {
        errors.cellPhone="Invalid number--(Numeric characters only)."
    }

    if(!values.homePhone) {
        errors.homePhone="Home phone number required."
    } else if(!PHONE_REGEX.test(values.homePhone)) {
        errors.homePhone="Invalid number--(Numeric characters only)."
    }

    return errors;

}

export default validation;
