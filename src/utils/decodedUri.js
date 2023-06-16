const sanitizeFilename = (filename) => {
  const sanitized = encodeURIComponent(filename);
  return sanitized;
};

module.exports = sanitizeFilename;
