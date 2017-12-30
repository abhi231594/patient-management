/**
 * PrescriptionAccess.js
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
    prescriptionAccessedBy: {
      type:'integer',
      model:'user'
    },
    prescriptionId: {
      type:'integer',
      model:'Prescription'
    },
    approvalStatus: {
      type:'integer',
      model:'PrescriptionAccessStatus',
      defaultsTo : 1
    }
  }
};
