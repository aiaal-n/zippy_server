const declarations = require('./declarations');

module.exports = [
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 15 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 16 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 15 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 20 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 20 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 17 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 22 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 17 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 25 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 21 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 25 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 25 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 25 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 25 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 35 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 35 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 30 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 35 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 40 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 50 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 55 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 55 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 60 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 65 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 60 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 70 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 70 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 80 * 60),
    declarations.getRunningModel(declarations.Type.Walking, null, declarations.Pace.Low, 80 * 60),
].map((model, index) => {
    return { day: index, ...model };
});
