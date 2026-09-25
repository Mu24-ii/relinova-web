import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function sendCertificateEmail(userEmail: string, courseTitle: string, certificateNumber: string) {
  try {
    const data = await resend.emails.send({
      from: 'ReliNova Academy <onboarding@resend.dev>',
      to: [userEmail],
      subject: `تهانينا! حصلت على شهادة دورة: ${courseTitle}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #070e1a; color: #B8C2D1; padding: 20px; border-radius: 10px;">
          <h2 style="color: #D9A62E;">أهلاً بك يا متعب، مبارك الإنجاز!</h2>
          <p>لقد أتممت بنجاح دورة <strong>${courseTitle}</strong> المعتمدة من منصة ReliNova.</p>
          <p>رقم الشهادة المعتمد: <code style="color: #D9A62E;">${certificateNumber}</code></p>
          <p>يمكنك الآن تسجيل الدخول إلى محفظتك الرقمية في المنصة للاطلاع على الشهادة وتحميلها بصيغة PDF في أي وقت.</p>
          <hr style="border-color: rgba(255,255,255,0.1); margin: 20px 0;" />
          <p style="font-size: 12px; color: #8a99ad;">فريق أكاديمية ReliNova للموثوقية والصيانة</p>
        </div>
      `,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}