function parseAcceptLanguage(header) {
  const languages = header.split(",");

  const parsedLanguages = {};

  languages.forEach((lang) => {
    const parts = lang.split(";");

    const languageCode = parts[0].trim();

    const qualityFactor = parts[1] ? parseFloat(parts[1].split("=")[1]) : 1;

    parsedLanguages[languageCode] = qualityFactor;
  });

  return parsedLanguages;
}

export default (fn) => (req, res) => {
  const acceptLanguageHeader = req.headers["accept-language"];

  const languages = acceptLanguageHeader
    ? parseAcceptLanguage(acceptLanguageHeader)
    : {};
  req.context = {
    languages,
    userAgent: req.headers["user-agent"],
  };

  return fn(req, res);
};
