export interface ReviewTemplate {
  id: string;
  role: 'client' | 'employee' | 'associate';
  text: string;
}

export const reviewTemplates: ReviewTemplate[] = [
  // Client Templates
  {
    id: 'client-1',
    role: 'client',
    text: 'R3 Consulting provided exceptional software consulting services for our business management needs. Their ERP solution transformed how we operate, and their team\'s expertise in business systems integration was outstanding. Highly recommend this software company!'
  },
  {
    id: 'client-2',
    role: 'client',
    text: 'Working with R3 Consulting was a game-changer for our organization. They delivered a comprehensive software product that streamlined our operations. Their business management consultant approach was professional and results-driven.'
  },
  {
    id: 'client-3',
    role: 'client',
    text: 'R3 Consulting exceeded our expectations with their custom ERP solution. The software company\'s attention to detail and understanding of business processes made the implementation seamless. Outstanding service from start to finish.'
  },
  {
    id: 'client-4',
    role: 'client',
    text: 'Fantastic experience with R3 Consulting! Their software consulting expertise helped optimize our business management systems. The team is knowledgeable, responsive, and delivered exactly what we needed for our growing company.'
  },
  {
    id: 'client-5',
    role: 'client',
    text: 'R3 Consulting transformed our business operations with their innovative software product. As a business management consultant, they understood our unique challenges and provided tailored solutions. Excellent ROI on our investment.'
  },
  {
    id: 'client-6',
    role: 'client',
    text: 'Highly professional software company with deep expertise in ERP solutions. R3 Consulting\'s business management consultant services helped us modernize our systems and improve efficiency across all departments.'
  },
  {
    id: 'client-7',
    role: 'client',
    text: 'R3 Consulting delivered outstanding software consulting services that revolutionized our business processes. Their custom software product was perfectly aligned with our needs, and the implementation was flawless.'
  },
  {
    id: 'client-8',
    role: 'client',
    text: 'Working with R3 Consulting was the best decision for our digital transformation. Their ERP solution and business management consultant expertise helped us scale efficiently. Top-tier software company!'
  },
  {
    id: 'client-9',
    role: 'client',
    text: 'R3 Consulting\'s software consulting services are unmatched. They developed a robust business management solution that increased our productivity significantly. Their team truly understands enterprise software needs.'
  },
  {
    id: 'client-10',
    role: 'client',
    text: 'Exceptional service from R3 Consulting! Their software product and business management consultant approach solved complex operational challenges. This software company consistently delivers high-quality ERP solutions.'
  },

  // Employee/Partner Templates
  {
    id: 'employee-1',
    role: 'employee',
    text: 'Proud to be part of R3 Consulting! This software company fosters innovation and excellence in every project. Our business management consultant team consistently delivers outstanding ERP solutions to clients.'
  },
  {
    id: 'employee-2',
    role: 'employee',
    text: 'R3 Consulting is an amazing software company to work with. The collaborative environment and focus on cutting-edge software consulting makes every project rewarding. Great leadership and vision in business management solutions.'
  },
  {
    id: 'employee-3',
    role: 'employee',
    text: 'Working at R3 Consulting has been incredibly fulfilling. This software company values expertise and innovation in developing custom software products and ERP solutions for diverse business needs.'
  },
  {
    id: 'employee-4',
    role: 'employee',
    text: 'R3 Consulting is a top-tier software company with exceptional team culture. As a business management consultant here, I\'ve seen firsthand how we transform client operations with innovative software solutions.'
  },
  {
    id: 'employee-5',
    role: 'employee',
    text: 'Fantastic experience being part of R3 Consulting\'s team. This software company consistently pushes boundaries in software consulting and ERP solution development. Proud of our business management expertise.'
  },
  {
    id: 'employee-6',
    role: 'employee',
    text: 'R3 Consulting stands out as a premier software company. The opportunity to work on diverse software products and serve as a business management consultant for various industries has been exceptional.'
  },
  {
    id: 'employee-7',
    role: 'employee',
    text: 'Being part of R3 Consulting means working with the best in software consulting. This software company\'s commitment to delivering quality ERP solutions and business management services is truly inspiring.'
  },
  {
    id: 'employee-8',
    role: 'employee',
    text: 'R3 Consulting provides an excellent platform for professional growth in software consulting. This software company\'s approach to business management consulting and custom software product development is industry-leading.'
  },
  {
    id: 'employee-9',
    role: 'employee',
    text: 'Proud to contribute to R3 Consulting\'s success as a leading software company. Our team\'s expertise in ERP solutions and business management consultant services creates real value for clients.'
  },
  {
    id: 'employee-10',
    role: 'employee',
    text: 'R3 Consulting is where innovation meets excellence in software consulting. This software company\'s dedication to superior business management solutions and custom software products sets industry standards.'
  },

  // Associate/Friend Templates
  {
    id: 'associate-1',
    role: 'associate',
    text: 'I\'ve watched R3 Consulting grow into an outstanding software company. Their expertise in business management consulting and ERP solutions is impressive. Highly recommend their software consulting services!'
  },
  {
    id: 'associate-2',
    role: 'associate',
    text: 'R3 Consulting has built a solid reputation as a reliable software company. Their business management consultant approach and innovative software products consistently deliver results for their clients.'
  },
  {
    id: 'associate-3',
    role: 'associate',
    text: 'Having followed R3 Consulting\'s journey, I can attest to their excellence in software consulting. This software company\'s ERP solutions and business management expertise are truly world-class.'
  },
  {
    id: 'associate-4',
    role: 'associate',
    text: 'R3 Consulting is a standout software company in the industry. Their business management consultant services and custom software product development consistently exceed client expectations.'
  },
  {
    id: 'associate-5',
    role: 'associate',
    text: 'Impressed by R3 Consulting\'s growth as a leading software company. Their software consulting expertise and comprehensive ERP solutions make them a trusted business management consultant partner.'
  },
  {
    id: 'associate-6',
    role: 'associate',
    text: 'R3 Consulting exemplifies excellence in software consulting. This software company\'s innovative approach to business management solutions and ERP development sets them apart in the industry.'
  },
  {
    id: 'associate-7',
    role: 'associate',
    text: 'Having worked alongside R3 Consulting, I can confirm their status as a premier software company. Their business management consultant expertise and software product quality are exceptional.'
  },
  {
    id: 'associate-8',
    role: 'associate',
    text: 'R3 Consulting continues to impress as a top-tier software company. Their software consulting services and comprehensive ERP solutions demonstrate true business management consulting excellence.'
  },
  {
    id: 'associate-9',
    role: 'associate',
    text: 'R3 Consulting has earned its reputation as an innovative software company. Their business management consultant approach and cutting-edge software products deliver outstanding results for clients.'
  },
  {
    id: 'associate-10',
    role: 'associate',
    text: 'Proud to recommend R3 Consulting as a leading software company. Their expertise in software consulting, ERP solutions, and business management consulting makes them an industry leader.'
  }
];

export const getTemplatesByRole = (role: 'client' | 'employee' | 'associate'): ReviewTemplate[] => {
  return reviewTemplates.filter(template => template.role === role);
};