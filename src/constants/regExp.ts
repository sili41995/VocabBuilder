const regExp = {
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  password: /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
  enWord: /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
  uaWord: /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u,
};

export default regExp;
