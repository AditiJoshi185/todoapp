var Joi = require('joi');

module.exports= {
  getTaskValidator,
  addTaskValidator,
  updateTaskValidator,
  deleteTaskValidator
};


function getTaskValidator(req,res,next){
  schema = Joi.object().keys({
    createAtDate  :Joi.string().optional(),
    doneAtDate    :Joi.string().optional()
  });

  valid = Joi.validate(req.body,schema);
  if(valid.error){
    console.log(valid);
    res.send(valid.error.details[0].message)
    
  }
  else
    return next();
}

function addTaskValidator(req,res,next){
  schema = Joi.object().keys({
    taskName  :Joi.string().required()
  });

  valid = Joi.validate(req.body,schema);
  if(valid.error){
    console.log(valid);
    res.send(valid.error.details[0].message)    
  }
  else
    return next();

}

function updateTaskValidator(req,res,next){
  schema = Joi.object().keys({
    taskId      : Joi.number().required(),
    taskName    : Joi.string().optional(),
    isDone      : Joi.number().optional()
  });

  valid = Joi.validate(req.body,schema);
  console.log("req----------->",req)
  if(valid.error){
    console.log("----------------------------->>>>>>>>>>>>>>>>",valid);
    res.send(valid.error.details[0].message)
  }
  else
    return next();

}

function deleteTaskValidator(req,res,next){
  schema = Joi.object().keys({
    taskId  :Joi.number().required()
  });

  valid = Joi.validate(req.body,schema);
  if(valid.error){
    console.log(valid);
    res.send(valid.error.details[0].message)
    
  }
  else
    return next();

}