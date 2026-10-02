export const config = {
  // استثناء صفحة الصيانة نفسها وملفات الصور والأصول حتى يظل التصميم يعمل
  matcher: '/((?!maintenance\\.html|images|audio|assets|favicon|wa-logo|site\\.webmanifest|robots\\.txt|sitemap\\.xml).*)',
};

export default function middleware(request) {
  const url = new URL(request.url);
  
  // التحقق من متغير البيئة MAINTENANCE_MODE
  if (process.env.MAINTENANCE_MODE === 'true') {
    url.pathname = '/maintenance.html';
    return Response.redirect(url, 302);
  }
}
