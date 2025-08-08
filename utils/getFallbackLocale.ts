import { defaultLocale } from "../locales";

/**
 * Get the fallback language for a given locale
 * 
 * @param locale - The locale to get the fallback language for
 * @returns The fallback language
 * @category i18n
 * @module getFallbackLanguage
 *
 * @example
 * ```tsx
 * const fallbackLanguage = getFallbackLanguage({ locale: 'fr-CA' });
 * ```
 * @example
 * ```tsx
 * const fallbackLanguage = getFallbackLanguage({ locale: 'en' });
 * ```
 */
export const getFallbackLocale = ({
	locale
} : {
	locale: string
}) => {
	switch (locale) {
		default:
			return defaultLocale;
	};
};
