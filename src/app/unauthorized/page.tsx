import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl backdrop-blur-xl">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-accent">Access Denied</p>
          <h1 className="text-5xl font-bold tracking-tight">Unauthorized</h1>
          <p className="mt-6 text-base leading-8 text-slate-300">
            ليس لديك صلاحية للوصول إلى هذه الصفحة. إذا كنت تعتقد أن هذا خطأ، تأكد من تسجيل الدخول باستخدام الحساب الصحيح أو تواصل مع المسؤول.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
