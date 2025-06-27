const botConfig = {
  companyInfo: {
    name: 'PoliSmart',
    website: 'https://poli-smart.ua',
    contact: {
      phone: '+380123456789',
      email: 'support@polismart.ua',
    },
  },
  policies: [
    {
      id: 'P1',
      name: 'Polis Zdorovya+',
      description:
        'Covers outpatient and inpatient treatment up to 75,000 UAH.',
      coverage: 75000,
      price: 1800,
      validity: 365,
    },
    {
      id: 'P2',
      name: 'Medical standard',
      description: 'Covers treatment up to 50,000 UAH.',
      coverage: 50000,
      price: 1200,
      validity: 365,
    },
    {
      id: 'P3',
      name: 'Full medical coverage',
      description:
        'Compensates for treatment up to 150,000 UAH, includes ambulance.',
      coverage: 150000,
      price: 3500,
      validity: 365,
    },
    {
      id: 'P4',
      name: "Basic driver's policy",
      description:
        "Covers the driver's liability to third parties up to 100,000 UAH.",
      coverage: 100000,
      price: 2500,
      validity: 365,
    },
    {
      id: 'P5',
      name: 'CASCO-Economy',
      description: 'Partial coverage of car damage up to 200,000 UAH.',
      coverage: 200000,
      price: 5000,
      validity: 365,
    },
    {
      id: 'P6',
      name: 'CASCO-Premium',
      description:
        'Full coverage of car damage up to 500,000 UAH, includes theft.',
      coverage: 500000,
      price: 12000,
      validity: 365,
    },
    {
      id: 'P7',
      name: 'Medical policy for tourists',
      description: 'Covers treatment abroad up to 1,000,000 UAH.',
      coverage: 1000000,
      price: 4500,
      validity: 90,
    },
    {
      id: 'P8',
      name: 'Medical policy for children',
      description: 'Compensates for treatment of a child up to 80,000 UAH.',
      coverage: 80000,
      price: 2200,
      validity: 365,
    },
    {
      id: 'P9',
      name: 'Policy Health for pensioners',
      description: 'Includes examination and treatment up to 60,000 UAH.',
      coverage: 60000,
      price: 1600,
      validity: 365,
    },
    {
      id: 'P10',
      name: 'Road accident policy+',
      description:
        'Covers treatment of the driver and passengers in a road accident up to 200,000 UAH.',
      coverage: 200000,
      price: 3800,
      validity: 365,
    },
    {
      id: 'P11',
      name: 'Policy for emergencies',
      description: 'Covers emergency hospitalization costs up to 100,000 UAH.',
      coverage: 100000,
      price: 2700,
      validity: 365,
    },
    {
      id: 'P12',
      name: 'Extended medical coverage',
      description:
        'Includes payment for medicines and rehabilitation up to 120,000 UAH.',
      coverage: 120000,
      price: 3100,
      validity: 365,
    },
    {
      id: 'P13',
      name: 'Ambulance policy',
      description:
        'Guarantees payment for ambulance services up to 50,000 UAH.',
      coverage: 50000,
      price: 1300,
      validity: 365,
    },
    {
      id: 'P14',
      name: 'Policy for athletes',
      description: 'Covers sports injuries up to 90,000 UAH.',
      coverage: 90000,
      price: 2900,
      validity: 365,
    },
    {
      id: 'P15',
      name: 'Policy for motorcyclists',
      description:
        'Covers treatment of injuries from road accidents up to 150,000 UAH.',
      coverage: 150000,
      price: 4200,
      validity: 365,
    },
    {
      id: 'P16',
      name: 'Policy for long-distance truck drivers',
      description: 'Covers medical expenses during trips up to 200,000 UAH.',
      coverage: 200000,
      price: 5000,
      validity: 365,
    },
    {
      id: 'P17',
      name: 'Policy for cyclists',
      description: 'Includes coverage of injuries up to 70,000 UAH.',
      coverage: 70000,
      price: 2000,
      validity: 365,
    },
    {
      id: 'P18',
      name: 'Policy avtocivilka+',
      description: 'Extended coverage civil liability up to 300,000 UAH.',
      coverage: 300000,
      price: 6000,
      validity: 365,
    },
    {
      id: 'P19',
      name: 'Policy for travelers in Ukraine',
      description:
        'Compensates medical expenses during travel up to 50,000 UAH.',
      coverage: 50000,
      price: 1800,
      validity: 90,
    },
    {
      id: 'P20',
      name: 'Policy for office workers',
      description:
        'Compensates treatment due to occupational diseases up to 100,000 UAH.',
      coverage: 100000,
      price: 2500,
      validity: 365,
    },
  ],
  faq: [
    {
      question: 'How to apply for an insurance policy?',
      answer:
        'You can apply for an insurance policy policy online through our website or contact our office.',
    },
    {
      question: 'Does the policy cover dental services?',
      answer: 'Only dental emergencies are covered by policy A.',
    },
    {
      question: 'Does the policy cover COVID-19?',
      answer: 'Yes, provided there is a confirmed diagnosis of COVID-19.',
    },
  ],
};

export default botConfig;
