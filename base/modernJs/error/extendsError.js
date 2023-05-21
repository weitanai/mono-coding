class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function testValidationError() {
    try {
        const loginObj = {};
        if(!loginObj.name) {
            throw new ValidationError('login Error: not name')
        } 
    }catch (e) {
        console.log(e.name, e.message)
    }
}
testValidationError();