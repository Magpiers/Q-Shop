export const validationMessages = {
    CLIENT_NAME: [
        { type: 'required', message: 'Client Name is required' },
        { type: 'minlength', message: 'Client Name must be at least 5 characters long' },
        { type: 'maxlength', message: 'Client Name cannot be more than 25 characters long' },
        // { type: 'pattern', message: 'Your First Name must contain only numbers and letters' },
        // { type: 'validUsername', message: 'Your First Name has already been taken' }
    ],
    EMAIL: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
    ],
    CLIENT_NUMBER: [
        { type: 'required', message: 'Client Number is required' },
        { type: 'pattern', message: 'Enter a valid number' }
    ],
    BILLING_ADDRESS: [
        { type: 'required', message: 'Billing Address is required' },
    ],
    CONTRACT_PERIOD: [
        { type: 'required', message: 'Please enter contract period' },
    ],
    DATE: [
        { type: 'required', message: 'Please enter date' },
    ],
}