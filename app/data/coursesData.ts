// app/data/coursesData.ts

// ==========================================
// 1. الواجهات (Interfaces)
// ==========================================

export interface Course {
  slug: string;
  title: string;
  titleAr?: string;
  description: string;
  price: string;
  image: string;
  level: string;
}

export interface CourseCategory {
  category: string;
  courses: Course[];
}

export interface CurriculumItem {
  titleAr: string;
  titleEn: string;
  duration?: string;
  isPreview?: boolean;
}

export interface CurriculumModule {
  moduleTitleAr: string;
  moduleTitleEn: string;
  lessons: CurriculumItem[];
}

export interface CourseDetail {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  price: string;
  image: string;
  aboutAr: string;
  aboutEn: string;
  learningsAr: string[];
  learningsEn: string[];
  materialIncludesAr: string[];
  materialIncludesEn: string[];
  targetAudienceAr: string[];
  targetAudienceEn: string[];
  curriculum: CurriculumModule[];
}

// ==========================================
// 2. تصنيفات الدورات للكتالوج (Course Categories)
// ==========================================

export const courseCategories: CourseCategory[] = [
  {
    category: "Condition Monitoring",
    courses: [
      {
        title: "Vibration Analysis I–III",
        slug: "vibration-analysis",
        description: "Master vibration analysis techniques, fault detection, and machine condition monitoring.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Ultrasound",
        slug: "ultrasound",
        description: "Learn airborne and structure-borne ultrasound testing for leak and electrical fault detection.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Infrared Thermography",
        slug: "infrared-thermography",
        description: "Detect thermal anomalies and apply infrared thermography for predictive maintenance.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Oil Analysis",
        slug: "oil-analysis",
        description: "Understand lubricant properties, contamination control, and wear debris analysis.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Electrical Condition Monitoring",
        slug: "electrical-condition-monitoring",
        description: "Techniques for monitoring electrical motors, transformers, and switchgear health.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      }
    ]
  },
  {
    category: "Reliability",
    courses: [
      {
        title: "RCM",
        slug: "rcm",
        description: "Reliability-Centered Maintenance principles to optimize maintenance strategies.",
        price: "349 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Intermediate"
      },
      {
        title: "RCA",
        slug: "rca",
        description: "Root Cause Analysis methodologies to prevent recurring industrial failures.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "FMEA",
        slug: "fmea",
        description: "Failure Mode and Effects Analysis for risk management and system reliability.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "CMRP Preparation",
        slug: "cmrp",
        description: "Certified Maintenance and Reliability Professional exam preparation course.",
        price: "399 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Advanced"
      },
      {
        title: "Reliability Engineering",
        slug: "reliability-engineering",
        description: "Core concepts of reliability engineering, metrics, and asset management.",
        price: "349 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Intermediate"
      }
    ]
  },
  {
    category: "Rotating Equipment",
    courses: [
      {
        title: "Pumps",
        slug: "pumps",
        description: "Industrial pumps fundamentals, components, mechanical seals, alignment, and performance maximization.",
        price: "299 SAR",
        image: "/courses/course-pumps.jpg",
        level: "All Levels"
      },
      {
        title: "Compressors",
        slug: "compressors",
        description: "Comprehensive course covering compressor operations, reliability, failure analysis, and mechanical maintenance.",
        price: "299 SAR",
        image: "/courses/course-compressors.jpg",
        level: "All Levels"
      },
      {
        title: "Fans",
        slug: "fans",
        description: "Study industrial fan types, selection, vibration analysis, and maintenance management to reduce downtime.",
        price: "299 SAR",
        image: "/courses/course-fans.jpg",
        level: "All Levels"
      },
      {
        title: "Gearboxes",
        slug: "gearboxes",
        description: "Gearbox fundamentals, mesh dynamics, lubrication, and failure modes analysis.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Bearings",
        slug: "bearings",
        description: "Understand bearing fundamentals, lubrication, maintenance, early fault detection, and failure modes.",
        price: "299 SAR",
        image: "/courses/course-bearings.jpg",
        level: "All Levels"
      },
      {
        title: "Mechanical Seals",
        slug: "mechanical-seals",
        description: "Leak prevention, seal types, support systems, troubleshooting, and best maintenance practices.",
        price: "299 SAR",
        image: "/courses/course-mechanical-seals.jpg",
        level: "All Levels"
      },
      {
        title: "Turbines",
        slug: "turbines",
        description: "Fundamentals of steam and gas turbines, configurations, condition monitoring, and vibration analysis.",
        price: "349 SAR",
        image: "/courses/course-turbines.jpg",
        level: "Advanced"
      }
    ]
  },
  {
    category: "Maintenance",
    courses: [
      {
        title: "Preventive Maintenance",
        slug: "preventive-maintenance",
        description: "Designing and implementing effective preventive maintenance schedules.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Predictive Maintenance",
        slug: "predictive-maintenance",
        description: "Transitioning from reactive to predictive maintenance strategies.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "Shutdown Management",
        slug: "shutdown",
        description: "Plant turnaround and shutdown planning, execution, and control.",
        price: "349 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Advanced"
      },
      {
        title: "Planning & Scheduling",
        slug: "planning-scheduling",
        description: "Best practices for maintenance planning, work orders, and scheduling.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Intermediate"
      },
      {
        title: "CMMS",
        slug: "cmms",
        description: "Computerized Maintenance Management Systems overview and implementation.",
        price: "299 SAR",
        image: "/images/courses/default-course.jpg",
        level: "All Levels"
      },
      {
        title: "SAP PM",
        slug: "sap-pm",
        description: "SAP Plant Maintenance module practical training for engineers.",
        price: "399 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Intermediate"
      },
      {
        title: "Maximo",
        slug: "maximo",
        description: "IBM Maximo asset management system configuration and usage.",
        price: "399 SAR",
        image: "/images/courses/default-course.jpg",
        level: "Intermediate"
      }
    ]
  }
];

// ==========================================
// 3. تفاصيل الدورات المستقلة (Course Detailed Data)
// ==========================================

export const coursesData: Record<string, CourseDetail> = {
  // ==========================================
  // 1. دورة الصيانة الوقائية (Preventive Maintenance)
  // ==========================================
  'preventive-maintenance': {
    id: 'preventive-maintenance',
    titleAr: 'الصيانة الوقائية',
    titleEn: 'Preventive Maintenance',
    descAr: 'أسس بناء الجداول الزمنية الدورية لخدمة المعدات ومنع حدوث الأعطال المفاجئة.',
    descEn: 'Foundations of building periodic schedules for equipment servicing and preventing sudden failures.',
    price: '299 SAR',
    image: '/courses/pm.jpeg',
    
    aboutAr: 'تركز الدورة على التكنيك الأساسي للصيانة الوقائية (Preventive Maintenance - PM) وكيفية الانتقال من أسلوب الصيانة التفاعلية عند الأعطال (Reactive Maintenance) إلى خطط استباقية منتظمة. تهدف الدورة إلى تقليل فترات التوقف غير المخطط لها، إطالة العمر الافتراضي للمعدات، وتقليل تكلفة الإصلاحات الفجائية عبر جداول زمنية وتفقد دوري دقيق.',
    aboutEn: 'Focuses on the core technique of Preventive Maintenance (PM) and transitioning from Reactive Maintenance to proactive schedules to reduce unplanned downtime, extend equipment lifespan, and lower repair costs.',
    
    learningsAr: [
      'تخطيط وإعداد خطط الصيانة: بناء جداول دورية مستندة إلى الوقت (Time-based) أو معدل التشغيل (Usage-based).',
      'إدارة قوائم الفحص (Checklists): كتابة وإعداد قوائم تفقد وإجراءات عمل قياسية (SOPs) عالية الدقة.',
      'تحليل المؤشرات والبيانات: استخدام قراءات التشغيل لاكتشاف علامات التآكل المبكرة.',
      'إدارة قطع الغيار والحلول: تحديد الأجزاء المستهلكة وجدول استبدالها قبل حدوث الفشل Mechanical Failure.'
    ],
    learningsEn: [
      'Planning PM Plans: Building time-based and usage-based maintenance schedules.',
      'Checklist Management: Developing high-precision inspection checklists and SOPs.',
      'Data & Indicator Analysis: Utilizing operating readings to detect early wear signs.',
      'Spare Parts Management: Identifying consumable parts and replacement schedules prior to mechanical failure.'
    ],

    targetAudienceAr: [
      'مهندسو وفنيو الصيانة الميكانيكية والتشغيل.',
      'مخططو وجدوليو عمليات الصيانة (Maintenance Planners & Schedulers).',
      'مشغلو المعدات والأصول في المنشآت الصناعية.',
      'الطلاب والمتخصصون الراغبون في فهم استراتيجيات موثوقية المعدات.'
    ],
    targetAudienceEn: [
      'Mechanical Maintenance & Operations Engineers & Technicians.',
      'Maintenance Planners & Schedulers.',
      'Equipment & Asset Operators in Industrial Facilities.',
      'Students and Professionals seeking to understand equipment reliability strategies.'
    ],

    materialIncludesAr: [
      'دروس فيديو تعليمية شاملة',
      'نماذج وقوالب جاهزة لإجراءات العمل القياسية (SOPs)',
      'اختبارات تقييمية بعد كل محور',
      'شهادة إتمام معتمدة من ReliNova'
    ],
    materialIncludesEn: [
      'Comprehensive Video Lectures',
      'Downloadable SOPs & Checklist Templates',
      'Assessment Quizzes Per Module',
      'ReliNova Certificate of Completion'
    ],

    curriculum: [
      {
        moduleTitleAr: 'المحور الأول: المقدمة والمبادئ',
        moduleTitleEn: 'Module 1: Introduction & Principles',
        lessons: [
          { titleAr: 'مفهوم الصيانة الوقائية وأهميتها في استراتيجيات الموثوقية (Reliability)', titleEn: 'Preventive Maintenance Concept & Role in Reliability', isPreview: true }
        ]
      },
      {
        moduleTitleAr: 'المحور الثاني: أنواع الصيانة',
        moduleTitleEn: 'Module 2: Maintenance Types',
        lessons: [
          { titleAr: 'المقارنة بين الصيانة الوقائية، التنبؤية (PdM)، والتفاعلية (Corrective)', titleEn: 'Comparison: Preventive, Predictive (PdM), and Corrective Maintenance' }
        ]
      },
      {
        moduleTitleAr: 'المحور الثالث: إعداد جداول PM',
        moduleTitleEn: 'Module 3: Setting Up PM Schedules',
        lessons: [
          { titleAr: 'تحديد الفترات الزمنية وساعات التشغيل المناسبة لكل معدة', titleEn: 'Determining Time Intervals and Operating Hours Per Asset' }
        ]
      },
      {
        moduleTitleAr: 'المحور الرابع: الفحص التشغيلي',
        moduleTitleEn: 'Module 4: Operational Inspection',
        lessons: [
          { titleAr: 'طرق قياس التآكل، التشحيم والتزييت، وفحص الكراسي والأجزاء الدوارة', titleEn: 'Measuring Wear, Lubrication Practices, and Inspecting Bearings & Rotating Parts' }
        ]
      },
      {
        moduleTitleAr: 'المحور الخامس: توثيق العمليات',
        moduleTitleEn: 'Module 5: Process Documentation',
        lessons: [
          { titleAr: 'إدارة أوامر العمل (Work Orders) واستخدام أنظمة CMMS', titleEn: 'Work Order Management and CMMS Systems Usage' }
        ]
      }
    ]
  },

  // ==========================================
  // 2. دورة مراقبة حالة الأنظمة الكهربائية (Electrical Condition Monitoring)
  // ==========================================
  'electrical-condition-monitoring': {
    id: 'electrical-condition-monitoring',
    titleAr: 'مراقبة حالة الأنظمة الكهربائية',
    titleEn: 'Electrical Condition Monitoring (ECM)',
    descAr: 'فحص وتقييم صحة المحركات الكهربائية، المولدات، المحولات، واللوحات بدون الحاجة إلى إيقاف التشغيل.',
    descEn: 'Inspect and evaluate the health of electric motors, generators, transformers, and panels without stopping operations.',
    price: '299 SAR',
    image: '/courses/electrical-cm.jpeg',

    aboutAr: 'برنامج تدريبي متخصص يغطي الأساليب الحديثة لفحص وتقييم الدوائر والأنظمة الكهربائية أثناء الخدمة وبعدها. تركز الدورة على دمج تقنيات التحليل الكهربائي المتقدمة (مثل تحليل توقيع التيار والجهد، واختبارات العزل Dynamic & Static) للحد من الأعطال الكهربائية المفاجئة، وضمان كفاءة استهلاك الطاقة، وتفادي الحرائق والصدمات الكهربائية.',
    aboutEn: 'A specialized training program covering modern methods for inspecting and evaluating electrical circuits and systems in and out of service. Focuses on advanced electrical analysis techniques (such as MCSA/ESA and insulation testing) to reduce sudden breakdowns, ensure energy efficiency, and prevent fires and electrical shocks.',

    learningsAr: [
      'تحليل توقيع دافع المحرك (MCSA / ESA): استخدام تيار وجهد المحرك لتشخيص الأعطال الكهربائية والميكانيكية (مثل قضبان الدوار المكسورة، اللفات التالفة، ولا تمركز الفجوة الهوائية Air Gap Eccentricity).',
      'تقييم صحة العزل (Insulating Health): إجراء وتفسير اختبارات التفريغ الجزئي (Partial Discharge) ومقاومة العزل (Insulation Resistance / PI).',
      'جودة الطاقة (Power Quality): تحليل التوافقيات (Harmonics)، هبوط وارتفاع الجهد (Sags & Swells)، وعدم اتزان الأحمال وتأثيرها على عمر المعدة.',
      'فحص المحولات والمفاتيح: مراقبة حالة المحولات (غازات التفكك، العزل الزيتي) ولوحات التوزيع (Switchgears).',
      'التكامل مع التقنيات الأخرى: ربط نتائج الفحص الكهربائي بتقنيات التصوير الحراري والأمواج فوق الصوتية لتقديم صورة كاملة عن صحة النظام.'
    ],
    learningsEn: [
      'Motor Current & Electrical Signature Analysis (MCSA / ESA) to diagnose electrical and mechanical faults (broken rotor bars, stator winding faults, Air Gap Eccentricity).',
      'Insulation Health Assessment: Executing and interpreting Partial Discharge and Insulation Resistance (PI) tests.',
      'Power Quality Analysis: Harmonics, Sags & Swells, and load imbalance impact on asset lifecycle.',
      'Transformers & Switchgear Inspection: Dissolved Gas Analysis (DGA), oil insulation, and distribution boards.',
      'Integration with Thermal Imaging and Ultrasound for full system condition visualization.'
    ],

    targetAudienceAr: [
      'مهندسو وفنيو الصيانة الكهربائية والاعتمادية (Reliability Engineers).',
      'أخصائيو الصيانة التنبؤية (PdM Technicians) ومراقبة الحالة.',
      'مهندسو تشغيل المحطات والمصانع ومحطات توليد وتوزيع الطاقة.',
      'الفنيون والمهندسون المسؤولون عن إدارة الأصول الكهربائية الثقيلة (المحركات والمحولات).'
    ],
    targetAudienceEn: [
      'Electrical Maintenance & Reliability Engineers.',
      'Predictive Maintenance (PdM) & Condition Monitoring Technicians.',
      'Plant Operations Engineers & Power Generation/Distribution Professionals.',
      'Engineers & Technicians managing heavy electrical assets (Motors & Transformers).'
    ],

    materialIncludesAr: [
      'دروس فيديو تفاعلية عالية الجودة',
      'حالات دراسية واقعية لتشخيص قراءات المولدات والمحركات',
      'نماذج تقارير فحص ومراقبة الجهد والتيار',
      'شهادة إتمام معتمدة من ReliNova'
    ],
    materialIncludesEn: [
      'Interactive High-Quality Video Lectures',
      'Real-World Case Studies for Motor & Generator Diagnostics',
      'Inspection & Voltage/Current Reporting Templates',
      'ReliNova Certificate of Completion'
    ],

    curriculum: [
      {
        moduleTitleAr: 'المستوى التأسيسي: (Foundations & ESA Basics)',
        moduleTitleEn: 'Level 1: Foundations & ESA Basics',
        lessons: [
          { titleAr: 'مقدمة في نظرية الآلات الكهربائية (المحثة والمزامنة) ومظاهر الفشل الكهربائي', titleEn: 'Intro to Induction & Synchronous Machine Theory & Electrical Failure Modes', isPreview: true },
          { titleAr: 'أساسيات تحليل توقيع التيار (MCSA) والجهد (ESA)', titleEn: 'Basics of Motor Current Signature (MCSA) and Voltage Signature Analysis (ESA)' },
          { titleAr: 'اختبارات الدائرة الكهربائية وهي متوقفة (Static Testing): Resistance, Inductance, Insulation', titleEn: 'Static Electrical Testing: Resistance, Inductance, & Insulation' },
          { titleAr: 'التعرف على مشكلات جودة الطاقة التأسيسية ومعامل القدرة (Power Factor)', titleEn: 'Foundational Power Quality Issues & Power Factor' }
        ]
      },
      {
        moduleTitleAr: 'المستوى المتقدم: (Advanced Diagnostics & Assets)',
        moduleTitleEn: 'Level 2: Advanced Diagnostics & Assets',
        lessons: [
          { titleAr: 'تشخيص العيوب المتقدمة للمحركات: قضبان الدوار (Rotor Bars)، اللفات (Stator Faults)، والرنين', titleEn: 'Advanced Motor Diagnostics: Rotor Bars, Stator Faults, and Resonance' },
          { titleAr: 'تقنيات قياس التفريغ الجزئي (Partial Discharge) في المعدات عالية الجهد', titleEn: 'Partial Discharge Measurement Techniques in High Voltage Assets' },
          { titleAr: 'مراقبة حالة المحولات: تحليل الغازات المذابة (DGA) واختبارات الاستجابة الترددية (FRA)', titleEn: 'Transformer Condition Monitoring: Dissolved Gas Analysis (DGA) & FRA' },
          { titleAr: 'تحليل الاتجاهات (Trending)، إعداد حدود الإنذارات، وإنشاء استراتيجية صيانة كهربائية شاملة', titleEn: 'Trending Analysis, Alarm Limits Setting, and Building Complete ECM Strategy' }
        ]
      }
    ]
  },

  // ==========================================
  // 3. دورة تحليل الزيوت ومواد التشحيم (Oil Analysis)
  // ==========================================
  'oil-analysis': {
    id: 'oil-analysis',
    titleAr: 'تحليل الزيوت ومواد التشحيم',
    titleEn: 'Oil Analysis & Lubricant Condition Monitoring',
    descAr: 'المسار المهني الأساسي وفق معيار ISO 18436-4 لفهم صحة الزيوت والمعدات الصناعية وكشف التلف المبكر.',
    descEn: 'Professional path per ISO 18436-4 to understand oil and industrial equipment health and early wear detection.',
    price: '299 SAR',
    image: '/courses/oil-analysis.jpeg',

    aboutAr: 'سلسلة تدريبية متخصصة تُعنى بفهم واختبار خصائص زيوت التشحيم والمزيّتات المستخدمة في المعدات (كالمحركات، علب التروس، الضواغط، والمضخات). تهدف الدورة إلى تحقيق هدفين رئيسيين: مراقبة حالة الزيت نفسه لضمان كفاءة التشحيم، وتحديد جزيئات التآكل (Wear Debris) للكشف المبكر عن التلف في أجزاء الآلة الداخلية قبل حدوث الأعطال الجسيمة.',
    aboutEn: 'A specialized training series focused on understanding and testing lubricant properties in equipment (motors, gearboxes, compressors, pumps). Aims to monitor oil condition and identify wear debris for early machinery fault detection.',

    learningsAr: [
      'أخذ العينات الصحيح: أساليب سحب عينات الزيت الميدانية بطرق قياسية تمنع التلوث وتضمن تمثيل حالة المعدة.',
      'تقييم خصائص الزيت: فحص اللزوجة (Viscosity)، الرقم الحمضي (AN)، الرقم القاعدي (BN)، ومستوى الأكسدة والتلوث بالماء أو الوقود.',
      'تحليل جزيئات التآكل (Wear Debris Analysis): تحديد نوع وحجم وتركيز المعادن المتآكلة لتشخيص الأجزاء الداخلية المتضررة.',
      'إدارة وتخزين مواد التشحيم: الممارسات الصحيحة لتخزين، تصفية، ونقل الزيوت لمنع التلوث المسبق.',
      'ربط البيانات بالصيانة: تفسير التقارير المخبرية وتحديد مواعيد التغيير بناءً على الحاجة بدلاً من الجداول الزمنية الثابتة.'
    ],
    learningsEn: [
      'Proper sampling techniques avoiding contamination and ensuring representativeness.',
      'Evaluating oil properties: Viscosity, AN, BN, oxidation levels, and water/fuel contamination.',
      'Wear Debris Analysis: Identifying type, size, and concentration of wear metals to diagnose internal damage.',
      'Lubricant storage and management: Best practices for storing, filtering, and transferring oils.',
      'Data-to-maintenance integration: Interpreting lab reports and scheduling changes based on condition.'
    ],

    targetAudienceAr: [
      'مهندسو وفنيو الصيانة الميكانيكية والاعتمادية (Reliability Engineers).',
      'أخصائيو ومحللو الصيانة التنبؤية ومراقبة الحالة (Condition Monitoring Specialists).',
      'مهندسو التشحيم وأخصائيو إدارة الزيوت والمزيتات في المنشآت الصناعية.',
      'الكوادر العاملة في مختبرات فحص وتناول العينات البترولية والصناعية.'
    ],
    targetAudienceEn: [
      'Mechanical Maintenance & Reliability Engineers.',
      'Condition Monitoring Specialists & Analysts.',
      'Lubrication Engineers & Oil Management Specialists in Industrial Facilities.',
      'Personnel working in petroleum and industrial sample testing laboratories.'
    ],

    materialIncludesAr: [
      'دروس فيديو تفاعلية شاملة وفق معيار ISO 18436-4',
      'نماذج تحليل تقارير الزيت المخبرية وحالات دراسية',
      'دليل أخذ العينات وإجراءات العمل القياسية (SOP)',
      'شهادة إتمام معتمدة من ReliNova'
    ],
    materialIncludesEn: [
      'Comprehensive Interactive Video Lectures per ISO 18436-4',
      'Lab Oil Report Analysis Templates & Case Studies',
      'Sampling Guide & Standard Operating Procedures (SOP)',
      'ReliNova Certificate of Completion'
    ],

    curriculum: [
      {
        moduleTitleAr: 'Category I (تأسيسي)',
        moduleTitleEn: 'Category I (Foundations)',
        lessons: [
          { titleAr: 'مقدمة في علم الاحتكاك والتشحيم (Tribology) ووظائف الزيوت', titleEn: 'Introduction to Tribology and Oil Functions', isPreview: true },
          { titleAr: 'طرق وأماكن سحب العينات القياسية (Sampling Methods & Ports)', titleEn: 'Standard Sampling Methods & Ports' },
          { titleAr: 'الفحوصات الميدانية السريعة (Visual, Patch Test, Crackle Test)', titleEn: 'Quick Field Tests: Visual, Patch Test, Crackle Test' },
          { titleAr: 'التعرف على الملوثات الشائعة (الماء، الأتربة، السائل المبرد)', titleEn: 'Common Contaminants Identification: Water, Dirt, Coolant' },
          { titleAr: 'أساسيات التخزين السليم والتعامل مع زيوت التشحيم', titleEn: 'Proper Storage Basics and Handling of Lubricants' }
        ]
      },
      {
        moduleTitleAr: 'Category II (متوسط إلى متقدم)',
        moduleTitleEn: 'Category II (Intermediate to Advanced)',
        lessons: [
          { titleAr: 'الاختبارات المعملية التفصيلية (Viscosity, FTIR, ICP Spectroscopy, RULER)', titleEn: 'Detailed Lab Tests: Viscosity, FTIR, ICP Spectroscopy, RULER' },
          { titleAr: 'التحليل المتقدم لمعادن التآكل (Ferrography & Particle Counting)', titleEn: 'Advanced Wear Metals Analysis: Ferrography & Particle Counting' },
          { titleAr: 'إعداد وتحديد حدود الإنذار (Alarm Limits & Baselines) بناءً على نوع الآلة', titleEn: 'Setting Alarm Limits & Baselines Based on Machine Type' },
          { titleAr: 'تشخيص أعطال التروس والمحامل والمحركات من واقع تقارير الزيت', titleEn: 'Diagnosing Gear, Bearing, and Motor Faults from Oil Reports' },
          { titleAr: 'دمج نتائج تحليل الزيت مع تقنيات الاهتزاز والحرارة لرفع الموثوقية', titleEn: 'Integrating Oil Analysis with Vibration and Thermal Techniques for Reliability' }
        ]
      }
    ]
  }
};