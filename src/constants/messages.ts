const enum Messages {
  nameReqErr = 'Name is required',
  emailReqErr = 'Email is required',
  emailRegExpErr = 'Value must follow the standard email address format',
  passReqErr = 'Password is required',
  passRegExpErr = 'Password must contain at least one number and at least 6 characters of the Latin alphabet',
  greetings = 'Welcome',
  categoryReqErr = 'Category is required',
  isIrregularReqErr = '"Is irregular" is required',
  uaReqErr = 'Word is required',
  enReqErr = 'Translate is required',
  uaRegExpErr = 'Line must contain only Cyrillic (Ukrainian alphabet) characters, spaces and apostrophe',
  enRegExpErr = 'Line must contain only Latin characters, apostrophes and hyphens',
  wordCreated = 'Word created successfully',
}

export default Messages;
