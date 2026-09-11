import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import CourseCurriculum from '../../../../components/CourseCurriculum';
import { 
  BarChart3, 
  RefreshCw, 
  Calendar, 
  Award, 
  Video, 
  Globe 
} from 'lucide-react';

// قاعدة البيانات الشاملة لجميع الدورات والأقسام بالتنسيق الاحترافي
const coursesDatabase: Record<string, Record<string, {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  learnings: string[];
  benefits: string;
  image: string;
  price: string;
}>> = {
  // 1. قسم مراقبة الحالة (Condition Monitoring)
  'condition-monitoring': {
    'vibration-analysis': {
      titleAr: 'تحليل الاهتزازات (المستويات 1-3)',
      titleEn: 'Vibration Analysis I–III',
      descAr: 'تركز دورة تحليل الاهتزازات على كشف الأعطال الميكانيكية المبكرة في المعدات الدوارة من خلال قياس وتحليل الإشارات الاهتزازية وتفسير طيف الترددات بدقة عالية لضمان استمرارية التشغيل.',
      descEn: 'Focuses on early mechanical fault detection in rotating equipment through vibration signal measurement and high-accuracy spectrum analysis.',
      learnings: [
        'مبادئ قياس وتحليل الاهتزازات في المعدات الصناعية.',
        'كشف أعطال عدم المحاذاة، عدم الاتزان، ومشاكل المحامل.',
        'تفسير طيف الترددات (Spectrum Analysis) وقراءة الرسوم البيانية.',
        'استخدام الأجهزة والتقنيات الحديثة في مراقبة الحالة.',
        'وضع خطط الصيانة التنبؤية بناءً على قراءات الاهتزاز.'
      ],
      benefits: 'ستتمكن من اكتشاف أعطال المعدات قبل حدوث التوقفات المفاجئة، ورفع كفاءة صيانة الأصول الصناعية، واتخاذ قرارات دقيقة مبنية على البيانات التحليلية.',
      image: '/courses/condition-monitoring.jpeg',
      price: '299 SAR'
    },
    'ultrasound': {
      titleAr: 'التصوير والموجات فوق الصوتية',
      titleEn: 'Ultrasound',
      descAr: 'تستهدف هذه الدورة استخدام التكنولوجيا الصوتية عالية التردد لاكتشاف التسريبات، وفحص الأنظمة الكهربائية، ومراقبة حالة المحامل قبل حدوث التلف.',
      descEn: 'Utilizes high-frequency acoustic technology to detect leaks, inspect electrical systems, and monitor bearing conditions before failure.',
      learnings: [
        'أساسيات الموجات فوق الصوتية وتطبيقاتها في الصناعة.',
        'كشف تسريبات الغازات والهواء المضغوط والبخار.',
        'فحص واختبار الأنظمة الكهربائية والتفريغ الجزئي.',
        'مراقبة تشحيم وحالة المحامل بفعالية.',
        'تحليل التقارير الصوتية واتخاذ الإجراءات الصيانة المناسبة.'
      ],
      benefits: 'تخفيض استهلاك الطاقة، كشف التسريبات المبكرة التي تكلف المصانع خسائر مالية ضخمة، وإطالة عمر المعدات الكهربائية والميكانيكية.',
      image: '/courses/ultrasound.jpeg',
      price: '299 SAR'
    },
    'infrared-thermography': {
      titleAr: 'التصوير الحراري بالأشعة تحت الحمراء',
      titleEn: 'Infrared Thermography',
      descAr: 'تعلم قراءة وتفسير الصور الحرارية لكشف النقاط الساخنة في اللوحات الكهربائية والمعدات الميكانيكية ومنع توقفها المفاجئ.',
      descEn: 'Learn to read and interpret thermal images to detect hot spots in electrical panels and mechanical equipment.',
      learnings: [
        'مبادئ الفيزياء الحرارية والأشعة تحت الحمراء.',
        'فحص اللوحات والمحولات والمولدات الكهربائية حرارياً.',
        'تحليل صور الأجهزة الميكانيكية وتحديد الاحتكاك الزائد.',
        'معايير كتابة التقارير الحرارية الاحترافية.',
        'تحديد أولويات الصيانة بناءً على شدة الحرارة.'
      ],
      benefits: 'حماية المنشأة من حرائق التوصيلات الكهربائية، وتقليل الأعطال المفاجئة الناتجة عن الأحمال الزائدة أو المقاومات العالية.',
      image: '/courses/thermography.jpeg',
      price: '299 SAR'
    },
    'oil-analysis': {
      titleAr: 'تحليل الزيوت والسوائل الصناعية',
      titleEn: 'Oil Analysis',
      descAr: 'دراسة خواص زيوت التزليق والكشف عن جزيئات التآكل والملوثات الكيميائية لتقييم صحة الآلات وتحديد مواعيد التغيير المثلى.',
      descEn: 'Study lubricant properties and detect wear debris and chemical contaminants to evaluate machine health.',
      learnings: [
        'خواص زيوت التزليق والشحوم الصناعية.',
        'اكتشاف جزيئات التآكل المعدني وتحديد مصدرها داخل الآلة.',
        'كشف التلوث بالرطوبة والغبار والكيمياويات.',
        'تفسير نتائج المختبر لتقييم صحة المحركات والمضخات.',
        'تطوير استراتيجيات إدارة وزيت التزليق للمصنع.'
      ],
      benefits: 'زيادة العمر الافتراضي للمعدات الحساسة، وتقليل تكاليف تغيير الزيوت المبالغ فيها عبر اعتماد استراتيجية التغيير حسب الحاجة.',
      image: '/courses/oil-analysis.jpeg',
      price: '299 SAR'
    },
    'electrical-condition-monitoring': {
      titleAr: 'مراقبة الحالة الكهربائية',
      titleEn: 'Electrical Condition Monitoring',
      descAr: 'فحص وتقييم سلامة المحركات والمولدات الكهربائية عبر تحليل جودة الطاقة، المقاومة العازلة، والتفريغ الجزئي.',
      descEn: 'Inspect and evaluate the safety of electric motors and generators through power quality analysis.',
      learnings: [
        'تقييم عزل المحركات والمولدات الكهربائية.',
        'تحليل جودة الطاقة وتأثيرها على الأصول.',
        'كشف أعطال العضو الداتي والثابت (Stator & Rotor).',
        'مراقبة أنظمة الحماية والتحكم الكهربائي.',
        'تطبيق برامج الفحص الدوري للمعدات الكهربائية.'
      ],
      benefits: 'منع احتراق المحركات الكبرى، وضمان استقرار الشبكة الكهربائية والتشغيل الآمن للمنشأة.',
      image: '/courses/electrical-cm.jpeg',
      price: '299 SAR'
    }
  },

  // 2. قسم الموثوقية (Reliability)
  'reliability': {
    'rcm': {
      titleAr: 'الصيانة المعتمدة على الموثوقية - RCM',
      titleEn: 'Reliability-Centered Maintenance (RCM)',
      descAr: 'تركز دورة الصيانة المعتمدة على الموثوقية (RCM) على تطوير استراتيجيات صيانة فعّالة تضمن أعلى مستويات الاعتمادية والأداء للمعدات.',
      descEn: 'Focuses on developing effective maintenance strategies that ensure maximum equipment reliability and performance.',
      learnings: [
        'مبادئ الصيانة المعتمدة على الموثوقية (RCM).',
        'تحليل وظائف المعدات وتحديد أوضاع الفشل.',
        'تقييم المخاطر وتأثير الأعطال على التشغيل.',
        'اختيار استراتيجيات الصيانة الوقائية والتنبؤية المناسبة.',
        'تحسين موثوقية الأصول وإطالة عمرها التشغيلي.'
      ],
      benefits: 'بعد إكمال الدورة ستكون قادرًا على بناء خطط صيانة أكثر كفاءة، وتحسين أداء المعدات، وتقليل تكاليف التشغيل.',
      image: '/courses/rcm.jpeg',
      price: '299 SAR'
    },
    'rca': {
      titleAr: 'تحليل السبب الجذري - RCA',
      titleEn: 'Root Cause Analysis - RCA',
      descAr: 'استخدام الأدوات والمنهجيات العلمية للوصول إلى الجذور الحقيقية للأعطال المتكررة ومنع تكرارها نهائياً في المنشأة.',
      descEn: 'Use scientific tools and methodologies to reach the true root causes of recurring failures.',
      learnings: [
        'منهجيات وأدوات تحليل السبب الجذري (مثل عظم السمكة و5 Why).',
        'جمع الأدلة والبيانات بعد وقوع العطل.',
        'تحليل التسلسل الزمني للأحداث الفنية.',
        'وضع التوصيات والحلول الجذرية الفعالة.'
      ],
      benefits: 'القضاء على الأعطال المزمنة التي تستنزف ميزانية الصيانة، وتحويل فريق العمل من وضعية رد الفعل إلى الحل الاستباقي.',
      image: '/courses/rca.jpeg',
      price: '299 SAR'
    },
    'fmea': {
      titleAr: 'تحليل أنماط الفشل وآثاره - FMEA',
      titleEn: 'Failure Mode and Effects Analysis - FMEA',
      descAr: 'تقييم منهجي لمواقع الضعف المحتملة في التصاميم أو العمليات، وحساب أرقام الأولوية للمخاطر لوضع خطط الوقاية.',
      descEn: 'Systematic evaluation of potential weaknesses in designs or processes.',
      learnings: [
        'مفاهيم تحليل المخاطر وأنماط الفشل.',
        'حساب رقم أولوية المخاطر (RPN).',
        'تحليل تأثير الفشل على جودة الإنتاج والسلامة.'
      ],
      benefits: 'رفع جودة العمليات التصنيعية والتشغيلية، وتقليل المخاطر الهندسية قبل تفاقمها.',
      image: '/courses/fmea.jpeg',
      price: '299 SAR'
    },
    'cmrp-preparation': {
      titleAr: 'تحضير شهادة أخصائي موثوقية - CMRP',
      titleEn: 'CMRP Preparation',
      descAr: 'دورة تأهيلية لاجتياز اختبار SMRP العالمي وتغطية المحاور الخمسة لإدارة الأصول والصيانة المعتمدة.',
      descEn: 'Preparatory course to pass the global SMRP exam and cover the five pillars of asset management.',
      learnings: [
        'تغطية محاور SMRP الخمسة.',
        'حل نماذج الأسئلة الامتحانية العالمية.',
        'فهم المصطلحات الهندسية والإدارية المعتمدة.'
      ],
      benefits: 'الحصول على الاعتماد الدولي المرموق CMRP، مما يعزز سيرتك الذاتية.',
      image: '/courses/condition-monitoring.jpeg',
      price: '299 SAR'
    },
    'reliability-engineering': {
      titleAr: 'هندسة الموثوقية',
      titleEn: 'Reliability Engineering',
      descAr: 'تطبيق المبادئ الإحصائية والهندسية لحساب مؤشرات الأداء مثل MTBF و MTTR وتحسين الاعتمادية التشغيلية.',
      descEn: 'Apply statistical and engineering principles to calculate performance metrics like MTBF and MTTR.',
      learnings: [
        'حساب وفهم مؤشرات MTBF و MTTR و Availability.',
        'تحليل منحنى حوض الاستحمام (Bathtub Curve).',
        'نمذجة الأعطال والتنبؤ بالعمر الافتراضي.'
      ],
      benefits: 'القدرة على قياس وتحسين أداء المصنع بالأرقام والمعادلات الهندسية المعتمدة.',
      image: '/courses/reliability-eng.jpeg',
      price: '299 SAR'
    }
  },

  // 3. قسم المعدات الدوارة (Rotating Equipment)
  'rotating-equipment': {
    'pumps': {
      titleAr: 'المضخات الصناعية (أنواعها وصيانتها)',
      titleEn: 'Pumps',
      descAr: 'دراسة تفصيلية للمضخات الطرد المركزي والإيجابي، مشاكل التجويف (Cavitation)، وطرق الإصلاح والمحاذاة.',
      descEn: 'Detailed study of centrifugal and positive displacement pumps, cavitation issues, and alignment.',
      learnings: [
        'أنواع المضخات الطرد المركزي والإزاحة الإيجابية.',
        'ظاهرة التجويف (Cavitation) وأسبابها وعلاجها.',
        'طرق التركيب، المعايرة، والمحاذاة الدقيقة (Alignment).'
      ],
      benefits: 'القضاء على أبرز مشاكل توقف المضخات، ورفع كفاءة الضخ وخفض استهلاك الطاقة.',
      image: '/courses/pumps.jpeg',
      price: '299 SAR'
    },
    'compressors': {
      titleAr: 'الضواغط الصناعية',
      titleEn: 'Compressors',
      descAr: 'فهم تشغيل وصيانة الضواغط الترددية والطرد المركزي، وأنظمة التحكم والتحميل المرتبطة بها.',
      descEn: 'Understand the operation and maintenance of reciprocating and centrifugal compressors.',
      learnings: [
        'مبادئ عمل الضواغط الترددية والدورانية والطرد المركزي.',
        'أنظمة التبريد والزيت والتحكم في الضواغط.'
      ],
      benefits: 'ضمان استقرار إمدادات الهواء والغازات المضغوطة للمصنع دون انقطاع.',
      image: '/courses/compressors.jpeg',
      price: '299 SAR'
    },
    'fans': {
      titleAr: 'المراوح وأنظمة التهوية',
      titleEn: 'Fans',
      descAr: 'معايير فحص وتوازن المراوح الصناعية والتعامل مع مشاكل تدفق الهواء والاهتزازات الناتجة عنها.',
      descEn: 'Standards for inspecting and balancing industrial fans and dealing with airflow problems.',
      learnings: [
        'أنواع المراوح الصناعية وتطبيقاتها.',
        'عمليات الاتزان الديناميكي والاستاتيكي للمراوح.'
      ],
      benefits: 'منع الاهتزازات العنيفة الناتجة عن عدم اتزان المراوح وحماية الهياكل المحيطة.',
      image: '/courses/fans.jpeg',
      price: '299 SAR'
    },
    'gearboxes': {
      titleAr: 'صناديق التروس والمخفضات',
      titleEn: 'Gearboxes',
      descAr: 'فحص التروس، كشف أعطال التعشيق، وتحليل حالة الزيوت والمحامل داخل صناديق السرعات.',
      descEn: 'Inspect gears, detect meshing faults, and analyze oil and bearing conditions inside speed reducers.',
      learnings: [
        'أنواع التروس ومخفضات السرعة الصناعية.',
        'كشف أعطال تآكل الأسنان ومشاكل التعشيق.'
      ],
      benefits: 'إطالة عمر مخفضات السرعة باهظة الثمن ومنع التلف المفاجئ.',
      image: '/courses/gearboxes.jpeg',
      price: '299 SAR'
    },
    'bearings': {
      titleAr: 'المحامل (الرولمان بلي)',
      titleEn: 'Bearings',
      descAr: 'أنواع المحامل، طرق التركيب والفك السليمة، شروط التشحيم المثالية، وطرق اكتشاف التلف المبكر.',
      descEn: 'Bearing types, proper mounting and dismounting methods, and early damage detection.',
      learnings: [
        'تصميمات وأنواع المحامل.',
        'طرق التركيب والفك الصحيحة (بالتسخين والهيدروليك).'
      ],
      benefits: 'تجنب أكثر أسباب أعطال المعدات الدوارة شيوعاً عبر التركيب والتشحيم الاحترافي.',
      image: '/courses/bearings.jpeg',
      price: '299 SAR'
    },
    'mechanical-seals': {
      titleAr: 'المانعات الميكانيكية (Mechanical Seals)',
      titleEn: 'Mechanical Seals',
      descAr: 'أنظمة منع التسرب السوائلي في المعدات الدوارة، تركيبها، وأنظمة التبريد والفلترة المصاحبة لها.',
      descEn: 'Fluid sealing systems in rotating equipment, their installation, and support systems.',
      learnings: [
        'مبادئ وأجزاء المانعات الميكانيكية.',
        'أنظمة التبريد والفلترة الداعمة (Flush Plans).'
      ],
      benefits: 'منع تسرب السوائل الخطرة والسامة، وتقليص تكاليف الصيانة الدورية.',
      image: '/courses/seals.jpeg',
      price: '299 SAR'
    },
    'turbines': {
      titleAr: 'التوربينات البخارية والغازية',
      titleEn: 'Turbines',
      descAr: 'نظرة متقدمة على تشغيل وصيانة التوربينات، أنظمة الحماية، التحكم في السرعة، ومراقبة التمدد الحراري.',
      descEn: 'Advanced overview of turbine operation, maintenance, protection systems, and thermal expansion.',
      learnings: [
        'نظريات تشغيل التوربينات البخارية والغازية.',
        'أنظمة الحماية والرحلة (Trip Systems).'
      ],
      benefits: 'اكتساب المهارات اللازمة للتعامل مع أكثر المعدات حساسية وقيمة في قطاع الطاقة.',
      image: '/courses/turbines.jpeg',
      price: '299 SAR'
    }
  },

  // 4. قسم الصيانة وإدارة الأصول (Maintenance)
  'maintenance': {
    'preventive-maintenance': {
      titleAr: 'الصيانة الوقائية',
      titleEn: 'Preventive Maintenance',
      descAr: 'أسس بناء الجداول الزمنية الدورية لخدمة المعدات ومنع حدوث الأعطال المفاجئة.',
      descEn: 'Foundations of building periodic schedules for equipment servicing to prevent sudden breakdowns.',
      learnings: [
        'وضع وتصميم برامج الصيانة الدورية.',
        'تحديد المهام والفترات الزمنية المناسبة.'
      ],
      benefits: 'الحد من الأعطال المفاجئة وتنظيم العمليات التشغيلية بشكل دوري مستقر.',
      image: '/courses/pm.jpeg',
      price: '299 SAR'
    },
    'predictive-maintenance': {
      titleAr: 'الصيانة التنبؤية',
      titleEn: 'Predictive Maintenance',
      descAr: 'استراتيجيات مراقبة الحالة المتقدمة لجدولة أعمال الصيانة بناءً على الحالة الفعليّة للآلة.',
      descEn: 'Advanced condition monitoring strategies to schedule maintenance based on actual machine condition.',
      learnings: [
        'دمج تقنيات مراقبة الحالة مع جدولة الصيانة.'
      ],
      benefits: 'توفير التكاليف عبر إجراء الصيانة فقط عند الحاجة الفعلية.',
      image: '/courses/pdm.jpeg',
      price: '299 SAR'
    },
    'shutdown-management': {
      titleAr: 'إدارة عمليات التوقف والإصلاح الشامل (Shutdowns)',
      titleEn: 'Shutdown Management',
      descAr: 'التخطيط الاستراتيجي، الجدولة الزمنية، وإدارة فرق العمل أثناء عمليات الإيقاف الكلي للمصانع.',
      descEn: 'Strategic planning, scheduling, and team management during major plant shutdowns.',
      learnings: [
        'مراحل التخطيط والتنفيذ والإغلاق لصيانة الكبرى.'
      ],
      benefits: 'إنهاء عمليات التوقف في الوقت المحدد دون تأخير أو تجاوز للميزانية.',
      image: '/courses/shutdown.jpeg',
      price: '299 SAR'
    },
    'planning-scheduling': {
      titleAr: 'التخطيط والجدولة في الصيانة',
      titleEn: 'Planning & Scheduling',
      descAr: 'إدارة أوامر العمل، توفير قطع الغيار، وتقدير الساعات المعتمدة للأعمال لرفع كفاءة الفنيين.',
      descEn: 'Work order management, spare parts provisioning, and estimating labor hours.',
      learnings: [
        'دورة حياة أمر العمل وجدولة الأنشطة.'
      ],
      benefits: 'رفع نسبة استغلال وقت الفنيين وتقليل أوقات الانتظار.',
      image: '/courses/planning.jpeg',
      price: '299 SAR'
    },
    'cmms': {
      titleAr: 'أنظمة إدارة الصيانة المحوسبة (CMMS)',
      titleEn: 'CMMS',
      descAr: 'كيفية توظيف أنظمة CMMS لتتبع الأصول، أوامر العمل، والمخزون بشكل رقمي دقيق.',
      descEn: 'How to utilize CMMS systems to track assets, work orders, and inventory digitally.',
      learnings: [
        'إدارة بيانات الأصول ومتابعة المخزون رقمياً.'
      ],
      benefits: 'التحول الرقمي الكامل لعمليات الصيانة والاستفادة من التقارير الآلية.',
      image: '/courses/cmms.jpeg',
      price: '299 SAR'
    },
    'sap-pm': {
      titleAr: 'نظام SAP PM لإدارة الصيانة',
      titleEn: 'SAP PM',
      descAr: 'إدارة إشعارات الصيانة، أوامر العمل، والمعدات باستخدام نظام SAP الشهير في القطاع الصناعي.',
      descEn: 'Manage maintenance notifications, work orders, and equipment using SAP PM.',
      learnings: [
        'التعامل مع شاشات وقوائم SAP PM.'
      ],
      benefits: 'إتقان أحد أهم الأنظمة العالمية المطلوبة بقوة في السوق الصناعي.',
      image: '/courses/sappm.jpeg',
      price: '299 SAR'
    }
  }
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; courseSlug: string }>;
}) {
  const { locale, slug, courseSlug } = await params;
  const isAr = locale === 'ar';

  // جلب بيانات الدورة المخصصة أو عرض بيانات افتراضية عامة مطابقة
  const sectionCourses = coursesDatabase[slug] || {};
  const course = sectionCourses[courseSlug] || {
    titleAr: 'دورة هندسية متخصصة',
    titleEn: 'Specialized Engineering Course',
    descAr: 'محتوى تدريبي متقدم مصمم بعناية لتطوير المهارات الفنية والعملية في هذا التخصص.',
    descEn: 'Advanced training content carefully designed to develop technical and practical skills.',
    learnings: [
      'فهم المبادئ الأساسية للتخصص.',
      'تطبيق الأدوات والأساليب العملية.',
      'تطوير كفاءة الأداء التشغيلي.'
    ],
    benefits: 'اكتساب مهارات متقدمة ترفع من جاهزيتك المهنية والعملية.',
    image: '/courses/condition-monitoring.jpeg',
    price: '299 SAR'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* زر العودة */}
        <div>
          <Link 
            href={`/${locale}/courses/${slug}`} 
            className="text-amber-500 font-semibold text-sm hover:underline inline-block"
          >
            {isAr ? '← العودة إلى قائمة الدورات' : '← Back to Courses'}
          </Link>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left / Main Content Column (2 Columns wide) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Course Header Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-video">
              <Image 
                src={course.image} 
                alt={courseSlug} 
                fill 
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-6 sm:p-8 text-white">
                <div className={`flex ${isAr ? 'justify-start' : 'justify-end'}`}>
                  <span className="bg-white/95 text-gray-900 font-bold px-4 py-1.5 rounded-lg text-sm shadow">
                    Orbit
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    {isAr ? course.titleAr : course.titleEn}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-200">
                    {isAr ? 'اللغة الإنجليزية • دورة فيديو تفاعلية عبر الإنترنت' : 'English Language • Self-Paced Online Video Course'}
                  </p>
                </div>
              </div>
            </div>

            {/* Ratings & Title Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-bold text-gray-900">4.75</span>
                  <span className="text-gray-500 text-sm">(4 Ratings)</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{isAr ? course.titleAr : course.titleEn}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {isAr ? `التصنيف: ${slug}` : `Categories: ${slug} Orbit`}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <button className="hover:text-emerald-700 transition flex items-center gap-1">🔖 {isAr ? 'المفضلة' : 'Wishlist'}</button>
                <span>•</span>
                <button className="hover:text-emerald-700 transition flex items-center gap-1">🔗 {isAr ? 'مشاركة' : 'Share'}</button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 flex gap-8">
              <button className="border-b-2 border-emerald-800 pb-3 font-semibold text-emerald-800 text-sm">{isAr ? 'معلومات الدورة' : 'Course Info'}</button>
              <button className="border-b-2 border-transparent pb-3 font-medium text-gray-500 hover:text-gray-700 text-sm">{isAr ? 'التقييمات' : 'Reviews'}</button>
            </div>

            {/* About Course */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? 'عن الدورة' : 'About Course'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {isAr ? course.descAr : course.descEn}
              </p>
              <button className="text-emerald-800 font-semibold text-sm hover:underline pt-2 block">+ {isAr ? 'عرض المزيد' : 'Show More'}</button>
            </div>

            {/* What Will You Learn */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? 'ماذا ستتعلم؟' : 'What Will You Learn?'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <ul className="space-y-3">
                  {course.learnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2">✓ {learning}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Topics of Course (Curriculum Accordion) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{isAr ? 'مواضيع الدورة' : 'Topics of Course'}</h3>
              <CourseCurriculum />
            </div>

          </div>

          {/* Right / Sidebar Column (1 Column wide) */}
          <div className="space-y-6">
            
            {/* Pricing & Checkout Box */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
              <div className="text-3xl font-extrabold text-gray-900">{course.price}</div>
              
              <div className="space-y-3">
                <Link 
                  href={`/${locale}/courses/${slug}/${courseSlug}/enrolled`}
                  className="block w-full bg-[#1b4332] hover:bg-[#132e22] text-white font-semibold py-3.5 rounded-xl transition text-center shadow-sm"
                >
                  {isAr ? 'اشتراك الآن' : 'Register Now'}
                </Link>
                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold py-3 rounded-xl transition">
                  {isAr ? 'تحميل البروشور' : 'Download Brochure'}
                </button>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-4 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <BarChart3 size={18} className="text-[#0B2E59]" />
                    <span>{isAr ? 'المستوى' : 'Level'}</span>
                  </div>
                  <span className="font-bold text-gray-900">{isAr ? 'جميع المستويات' : 'All Levels'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <RefreshCw size={18} className="text-[#0B2E59]" />
                    <span>{isAr ? 'آخر تحديث' : 'Last Updated'}</span>
                  </div>
                  <span className="font-bold text-gray-900">2 يوليو 2026</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={18} className="text-[#0B2E59]" />
                    <span>{isAr ? 'صلاحية التسجيل' : 'Access'}</span>
                  </div>
                  <span className="font-bold text-gray-900">{isAr ? '90 يوماً' : '90 days'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Award size={18} className="text-[#0B2E59]" />
                    <span>{isAr ? 'الشهادة' : 'Certificate'}</span>
                  </div>
                  <span className="font-bold text-gray-900">{isAr ? 'شهادة إتمام' : 'Certificate of completion'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Video size={18} className="text-[#0B2E59]" />
                    <span>{isAr ? 'نوع المحتوى' : 'Type'}</span>
                  </div>
                  <span className="font-bold text-gray-900">{isAr ? 'فيديو عبر الإنترنت' : 'Online Video Course'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Globe size={18} className="text-[#0B2E59]" />
                    <span>{isAr ? 'اللغة' : 'Language'}</span>
                  </div>
                  <span className="font-bold text-gray-900">{isAr ? 'إنجليزي' : 'English'}</span>
                </div>
              </div>
            </div>

            {/* Instructor Box */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 text-sm">{isAr ? 'مدرب الدورة' : 'A course by'}</h4>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image src="/courses/planning.jpeg" alt="Instructor" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Aly Attia</h5>
                </div>
              </div>
            </div>

            {/* Material Includes */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 text-sm">{isAr ? 'محتويات المواد' : 'Material Includes'}</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li>• {isAr ? '25 فيديو عند الطلب' : '25 On-demand videos'}</li>
                <li>• {isAr ? '25 اختبار قصير' : '25 Quizzes'}</li>
                <li>• {isAr ? '3 أشهر إمكانية الوصول' : '3 Months Access'}</li>
                <li>• {isAr ? 'امتحان الشهادة النهائي' : 'Final Certification Exam'}</li>
                <li>• {isAr ? 'شهادة إتمام معتمدة' : 'Certificate of Completion'}</li>
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 text-sm">{isAr ? 'الجمهور المستهدف' : 'Audience'}</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li>• {isAr ? 'مهندسو الصيانة والموثوقية' : 'Maintenance and reliability engineers'}</li>
                <li>• {isAr ? 'فنيو مراقبة الحالة' : 'Condition monitoring technicians'}</li>
                <li>• {isAr ? 'المهندسون الميكانيكيون والكهربائيون' : 'Mechanical and electrical engineers'}</li>
                <li>• {isAr ? 'مدراء الأصول والمصانع' : 'Asset and plant managers'}</li>
                <li>• {isAr ? 'استشاريو الفحص والموثوقية' : 'Inspection and reliability consultants'}</li>
                <li>• {isAr ? 'طلاب الهندسة والخريجون الجدد' : 'Engineering students and fresh graduates'}</li>
                <li>• {isAr ? 'محترفو الصيانة التنبؤية واختبارات عدم الاتلاف' : 'NDT and predictive maintenance professionals'}</li>
              </ul>
            </div>

            {/* Contact Instructor Box */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 text-sm">{isAr ? 'تواصل مع المدرب' : 'Contact Instructor'}</h4>
              <form className="space-y-3">
                <input 
                  type="text" 
                  placeholder={isAr ? 'اسمك' : 'Your Name'} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-800"
                />
                <input 
                  type="email" 
                  placeholder={isAr ? 'البريد الإلكتروني' : 'Email Address'} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-800"
                />
                <textarea 
                  placeholder={isAr ? 'الرسالة' : 'Message'} 
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-800 resize-none"
                ></textarea>
                <button 
                  type="button" 
                  className="w-full bg-[#1b4332] hover:bg-[#132e22] text-white font-semibold py-2.5 rounded-xl transition text-sm shadow-sm"
                >
                  {isAr ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}