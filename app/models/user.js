import DS from "ember-data";
import { buildValidations, validator } from "ember-cp-validations";

const Validations = buildValidations({
  email : [
    validator('presence', {
      presence:true,
      ignoreBlank:true,
      message:"Email can't be empty"
    }),
    validator("format", {
      type:"email",
      message:"Email should be valid"
    })
  ],
  password : [
    validator("presence",{
      presence:true,
      ignoreBlank:true,
      message:"Password can't be empty"
    }),
    validator("length", {
      min:8,
      message:"Password must be 8 characters minimum"
    })
  ]
})

export default DS.Model.extend(Validations,{
    email: DS.attr("string"),
    password: DS.attr("string")
});
