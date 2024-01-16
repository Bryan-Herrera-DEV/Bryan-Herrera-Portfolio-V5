export enum LanguagePrefix {
  es = "es",
  en = "en",
}
export const useRouteHelper = () => {
  const changeRoute = (language: LanguagePrefix) => {
    const newUrl = window.location.pathname.replace(
      /^\/[a-z]{2}(\/|$)/,
      `/${language}$1`
    );
    window.location.href = newUrl;
  };

  const getActiveLanguage = (): LanguagePrefix => {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    if (match) {
      return match[1] as LanguagePrefix;
    }
    return LanguagePrefix.es;
  };

  return {
    changeRoute,
    getActiveLanguage
  };
};
