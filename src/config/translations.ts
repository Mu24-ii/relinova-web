export const translations = {
  ar: {
    brand: {
      name: "ريلي نوفا",
      tagline: "منصة هندسية متخصصة في الموثوقية والصيانة",
    },
    nav: {
      home: "الرئيسية",
      courses: "الدورات التدريبية",
      services: "الخدمات الاستشارية",
      contact: "اتصل بنا",
      signin: "تسجيل الدخول",
      signup: "إنشاء حساب",
    },
    auth: {
      verifyTitle: "توثيق الحساب",
      verifySubtitle: "الرجاء إدخال البريد الإلكتروني ورمز الـ OTP المكون من أرقام.",
      emailLabel: "البريد الإلكتروني",
      otpLabel: "رمز التوثيق (OTP)",
      verifyButton: "تأكيد الحساب",
      resendCode: "إعادة إرسال",
      didntReceive: "لم تستلم الرمز؟",
      loading: "جاري التحقق...",
      successMessage: "🎉 تم توثيق الحساب بنجاح! جاري تحويلك...",
    },
    coursesPage: {
      title: "دورات هندسة الموثوقية والصيانة",
      subtitle: "طور مهاراتك الفنية والهندسية بأحدث المعايير العالمية",
      enrollNow: "سجل الآن",
    },
    common: {
      loading: "جاري التحميل...",
      error: "حدث خطأ ما، يرجى المحاولة مرة أخرى.",
      save: "حفظ",
      cancel: "إلغاء",
    }
  },
  en: {
    brand: {
      name: "ReliNova",
      tagline: "Specialized Engineering Platform for Reliability & Maintenance",
    },
    nav: {
      home: "Home",
      courses: "Courses",
      services: "Consulting Services",
      contact: "Contact Us",
      signin: "Sign In",
      signup: "Sign Up",
    },
    auth: {
      verifyTitle: "Account Verification",
      verifySubtitle: "Please enter your email and the OTP verification code.",
      emailLabel: "Email Address",
      otpLabel: "OTP Code",
      verifyButton: "Verify Account",
      resendCode: "Resend",
      didntReceive: "Didn't receive code?",
      loading: "Verifying...",
      successMessage: "🎉 Account verified successfully! Redirecting...",
    },
    coursesPage: {
      title: "Reliability & Maintenance Courses",
      subtitle: "Advance your technical and engineering skills with world-class standards",
      enrollNow: "Enroll Now",
    },
    common: {
      loading: "Loading...",
      error: "Something went wrong, please try again.",
      save: "Save",
      cancel: "Cancel",
    }
  }
};

export type Locale = 'ar' | 'en';
export function getDictionary(locale: string) {
  return translations[locale as Locale] || translations.ar;
}