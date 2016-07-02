var utils = require("./../model/utils/utils");
var validation = require("./../model/utils/validation");
var Prediction = require("../model/prediction/predictor");
var defaultPredictionFile = require("../resources/default_prediction.json");

function prediction(req, res) {

    if (validation.addPredictionObject(req)) {

        if (req.body.default_predictor) {

            Prediction.guessPrediction(defaultPredictionFile.employees,
                req.body.job_seeker, function (result) {
                    console.log("predictor result are:" + result);
                    res.json({"predictor_response":result});
                });
        } else {
            Prediction.guessPrediction(req.body.employees, req.body.job_seeker, function (result) {
                console.log("predictor result are:" + result);
                res.json({"predictor_response":result});
            });
        }

    } else {
        utils.sendErrorValidation(res);
    }

}

exports.prediction = prediction;