class InvalidFieldsError extends Error {
  constructor(message = 'Invalid fields') {
    super(message);
    this.name = 'badRequest';
  }
}

export default InvalidFieldsError;