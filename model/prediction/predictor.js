var DecisionTree = require('decision-tree');


function guessPrediction(employees, job_seeker, callback) {

    //Setup Target Class used for prediction:
    var class_name = "decision";

    //Setup Features to be used by decision tree:
    var features = [
        "university_degree",
        "degree_graduation_with_honors",
        "above_two_years_experience",
        "psychometric_above_680",
        "multilingual",
        "volunteering",
        "full_army_service",
        "officer_in_the_military",
        "high_school_graduation_with_honors",
        "youth_movements"];

    //Create decision tree and train model:
    var dt = new DecisionTree(employees, class_name, features);

    //Predict class label for an instance:
    var predicted_class = dt.predict(job_seeker);

    callback(predicted_class);
}

exports.guessPrediction = guessPrediction;