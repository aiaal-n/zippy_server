const declarations = require("./declarations");

module.exports = [    
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 12 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 18 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.NormalRun, null, declarations.Pace.Normal, 10 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.NormalRun, null, declarations.Pace.Normal, 15 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.RecoveryRun, null, declarations.Pace.Low, 15 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 27 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 27 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 27 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.CalmRun, null, declarations.Pace.Low, 39 * 60),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null),
    declarations.getRunningModel(declarations.Type.Rest, null, null, null)
].map((model, index) => {
    return { day: index, ...model };
});
