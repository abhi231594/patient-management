/**
 * MedicalRecord.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: 'string',
      required: true
    },
    patientId: {
      type:'integer',
      model:'user'
    },
    prescriptions: {
      collection:'prescription',
      via:'medicalRecordId'
    },
  }
};
