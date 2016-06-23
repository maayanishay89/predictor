/* Common */

function fieldValidation(field) {
    return !!(typeof field !== 'undefined' && field != null );
}

/* Private Functions */

function employeesValidation(employees) {

    var valid = employees
        && employees.constructor === Array;

    if (valid) {
        for (var i = 0; i < employees.length; i++) {
            valid = fieldValidation(employees[i].university_degree) && employees[i].university_degree.constructor === Boolean
                && fieldValidation(employees[i].degree_graduation_with_honors) && employees[i].degree_graduation_with_honors.constructor === Boolean
                && fieldValidation(employees[i].above_two_years_experience) && employees[i].above_two_years_experience.constructor === Boolean
                && fieldValidation(employees[i].psychometric_above_680) && employees[i].psychometric_above_680.constructor === Boolean
                && fieldValidation(employees[i].multilingual) && employees[i].multilingual.constructor === Boolean
                && fieldValidation(employees[i].volunteering) && employees[i].volunteering.constructor === Boolean
                && fieldValidation(employees[i].full_army_service) && employees[i].full_army_service.constructor === Boolean
                && fieldValidation(employees[i].officer_in_the_military) && employees[i].officer_in_the_military.constructor === Boolean
                && fieldValidation(employees[i].high_school_graduation_with_honors) && employees[i].high_school_graduation_with_honors.constructor === Boolean
                && fieldValidation(employees[i].youth_movements) && employees[i].youth_movements.constructor === Boolean
                && fieldValidation(employees[i].decision) && employees[i].decision.constructor === Boolean;
            if (!valid) {
                return false;
            }
        }
        return valid;
    }
    else return false;
}


function job_seekerValidation(job_seeker) {

    if (job_seeker) {
        var valid = fieldValidation(job_seeker.university_degree) && job_seeker.university_degree.constructor === Boolean
            && fieldValidation(job_seeker.degree_graduation_with_honors) && job_seeker.degree_graduation_with_honors.constructor === Boolean
            && fieldValidation(job_seeker.above_two_years_experience) && job_seeker.above_two_years_experience.constructor === Boolean
            && fieldValidation(job_seeker.psychometric_above_680) && job_seeker.psychometric_above_680.constructor === Boolean
            && fieldValidation(job_seeker.multilingual) && job_seeker.multilingual.constructor === Boolean
            && fieldValidation(job_seeker.volunteering) && job_seeker.volunteering.constructor === Boolean
            && fieldValidation(job_seeker.full_army_service) && job_seeker.full_army_service.constructor === Boolean
            && fieldValidation(job_seeker.officer_in_the_military) && job_seeker.officer_in_the_military.constructor === Boolean
            && fieldValidation(job_seeker.high_school_graduation_with_honors) && job_seeker.high_school_graduation_with_honors.constructor === Boolean
            && fieldValidation(job_seeker.youth_movements) && job_seeker.youth_movements.constructor === Boolean
        if (!valid) {
            return false;
        }
        return true;
    }
    else return false;
}

/* Predictior Objects */

function addPredictionObject(req) {

    var PredictionObject = req.body;

    if (PredictionObject) {

        if (PredictionObject.default_predictor) {
            return job_seekerValidation(PredictionObject.job_seeker);
        }else {
            return employeesValidation(PredictionObject.employees)
            && job_seekerValidation(PredictionObject.job_seeker);
        }

    } else {
        return false;
    }
}

/* Export */

exports.addPredictionObject = addPredictionObject;