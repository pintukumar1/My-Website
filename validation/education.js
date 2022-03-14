const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateEducationInput(data){
    let errors = {}

    data.college = !isEmpty(data.college) ? data.college : ""
    data.degree = !isEmpty(data.degree) ? data.degree : ""
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : ""
    data.from = !isEmpty(data.from) ? data.from : ""

    if(Validator.isEmpty(data.college)) {
        errors.college = "College field is required"
    }

    if(Validator.isEmpty(data.degree)) {
        errors.degree = "Degree field is required"
    }

    if(Validator.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = "fieldofstudy field is required"
    }

    if(Validator.isEmpty(data.from)) {
        errors.from = "from field is required "
    }

return {
    errors: errors ,
    isValid: isEmpty(errors)
    }
}