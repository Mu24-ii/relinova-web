export interface Certificate {
  id: string;
  titleAr: string;
  titleEn: string;
  issueDate: string;
  certificateNumber: string;
  issuer: string;
}

// مفتاح التخزين المحلي لكل مستخدم بناءً على إيميله الحقيقي
export function getUserCertificates(email: string): Certificate[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(`user_certs_${email}`);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

// دالة تلقائية لإضافة شهادة جديدة للمستخدم عند إتمام الدورة
export function issueCertificateToUser(email: string, courseTitleAr: string, courseTitleEn: string) {
  if (typeof window === 'undefined') return;
  
  const currentCerts = getUserCertificates(email);
  
  // التأكد من عدم حصوله على نفس الشهادة مسبقاً
  if (currentCerts.some(c => c.titleAr === courseTitleAr)) return;

  // تاريخ اليوم تلقائياً (تاريخ النظام الحالي)
  const todayStr = new Date().toISOString().split('T')[0]; // صيغة YYYY-MM-DD
  
  const newCert: Certificate = {
    id: 'cert-' + Date.now(),
    titleAr: courseTitleAr,
    titleEn: courseTitleEn,
    issueDate: todayStr,
    certificateNumber: 'REL-' + Math.floor(100000 + Math.random() * 900000),
    issuer: 'ReliNova Academy'
  };

  const updatedCerts = [newCert, ...currentCerts];
  localStorage.setItem(`user_certs_${email}`, JSON.stringify(updatedCerts));
  
  return newCert;
}