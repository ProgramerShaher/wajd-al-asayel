/**
 * config/site.ts
 * مكان مركزي وحيد لتحديد Domain الموقع
 * غيّر SITE_URL هنا فقط عند ربط الدومين الجديد
 *
 * الدومين الحالي (Vercel):  https://decorpaintsdammam.com
 * الدومين النهائي المستهدف: https://decorpaintsdammam.com
 *
 * عند الانتقال: غيّر SITE_URL فقط ← كل الملفات تتحدث تلقائياً
 */

export const SITE_URL = 'https://decorpaintsdammam.com';
// TODO: عند ربط الدومين النهائي:
// export const SITE_URL = 'https://decorpaintsdammam.com';

export const SITE_NAME = 'مؤسسة وجد الأصايل للديكورات والدهانات';
export const SITE_NAME_SHORT = 'وجد الأصايل';
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/dammam-luxury-decor-main.webp`;

export const PHONE_PRIMARY = '0556557498';
export const PHONE_SECONDARY = '0536402106';
export const WHATSAPP_PRIMARY = '966556557498';
export const WHATSAPP_SECONDARY = '966536402106';
