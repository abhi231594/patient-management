/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
  active: true,
  role: {
    data: [
      {
        id:1,
        name: 'Patient'
      },
      {
        id:2,
        name: 'Doctor'
      },
      {
        id:3,
        name: 'Pharmacist'
      },
      {
        id:4,
        name: 'Admin'
      }
    ],
    overwrite: true
  },
  prescriptionaccessstatus: {
    data: [
      {
        id:1,
        name: 'approvalRequested'
      },
      {
        id:2,
        name: 'approvalRejected'
      },
      {
        id:3,
        name: 'approved'
      }
    ],
    overwrite: true
  },
  user: {
    data: [
      {
        id:1,
        name: 'Abhishek Prasad',
        email: 'patient1@test.com',
        password: '12345678'
      },
      {
        id:2,
        name: 'Sharukh Khan',
        email: 'patient2@test.com',
        password: '12345678'

      },
      {
        id:3,
        name: 'Virat Kholi',
        email: 'patient3@test.com',
        password: '12345678'
      },
      {
        id:4,
        name: 'Dr Munna Bhai',
        email: 'doctor1@test.com',
        password: '12345678',
        roleId: 2
      },
      {
        id:5,
        name: 'Mr Mukesh Ambani',
        email: 'pharmacist1@test.com',
        password: '12345678',
        roleId: 3
      }
    ],
    overwrite: true
  },
  medicalrecord: {
    data: [
      {
        id:1,
        patientId:1,
        description: 'DIABETES MELLITUS (ICD-250.) HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1)'
      },
      {
        id:2,
        patientId:1,
        description: 'skin: denies rashes, itching, lumps, sores, lesio HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1)'
      },
      {
        id:3,
        patientId:1,
        description: 'Gastrointestinal: denies abdominal pain, dysphagia HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1)'
      },
      {
        id:4,
        patientId:1,
        description: 'DIABETES MELLITUS (ICD-250.) HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1)'
      },
      {
        id:5,
        patientId:2,
        description: 'Allergic/Immunologic: denies urticaria, hay fever, frequent UTIs; denies '
      },
      {
        id:6,
        patientId:2,
        description: 'disturbance, difficulty sleeping, suicidal ideation, hallucinations, paranoia'
      },
    ],
    overwrite: true
  },
  prescription: {
    data: [
      {
        id:1,
        description: 'Rx tab. Paracetamol 500mg Mitte 30 Sig 1 tab oral 3x day',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 1
      },
      {
        id:2,
        description: 'Tablet of morphine 2.5mg, given in quantity of 10, should be taken 1 tablet orally 1 time per day',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 1
      },
      {
        id:3,
        description: 'Solution of atropine 0.1%, given in quantity of 10ml, should be taken 10 drops 2 times daily before meals',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 2
      },
      {
        id:4,
        description: 'Solution of potassium bromide 3% given in quantity of 175ml, should be taken orally 1 tablespoon every evening',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 3
      },
      {
        id:5,
        description: 'Solution of potassium permanganate 0.01% given in quantity 200ml, should be used for sterilization of skin 3 times daily',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 1
      },
      {
        id:6,
        description: 'Strong tincture of Belladonna 10ml, to be given 10 drops 2 times daily orally',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 2
      },
      {
        id:7,
        description: 'Strong tincture of Belladonna 10ml, to be given 10 drops 2 times daily orally',
        prescribedForId: 1,
        prescribedById: 4,
        medicalRecordId: 3
      },
      {
        id:8,
        description: 'Ointment of Nistatin 10%, given in quantity of 100 grams, to be applied on the skin 4 times daily',
        prescribedForId: 2,
        prescribedById: 4,
        medicalRecordId: 6
      },
      {
        id:9,
        description: 'Ointment of Nistatin 10%, given in quantity of 100 grams, to be applied on the skin 4 times daily',
        prescribedForId: 2,
        prescribedById: 4,
        medicalRecordId: 5
      },
      {
        id:10,
        description: 'Suppository of Paracetamol 250mg, given in quantity of 10, to be taken 2 times daily per rectal',
        prescribedForId: 2,
        prescribedById: 4,
        medicalRecordId: 6
      }
    ],
    overwrite: true
  },
  prescriptionaccess: {
    data: [
      {
        id:1,
        prescriptionAccessedBy: 4,
        prescriptionId: 1,
        approvalStatus: 1
      },
      {
        id:2,
        prescriptionAccessedBy: 4,
        prescriptionId: 2,
        approvalStatus: 1
      },
      {
        id:3,
        prescriptionAccessedBy: 5,
        prescriptionId: 9,
        approvalStatus: 1
      },
      {
        id:4,
        prescriptionAccessedBy: 5,
        prescriptionId: 1,
        approvalStatus: 1
      }
    ],
    overwrite: true
  }
}
