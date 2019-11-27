const fresh = {
  firstName: null,
  lastName: null,
  email: null,
  userId: null,
  requesterId: null,
  helperId: null,
  clientId: null,
};

const local = {
  ...fresh,
  ...JSON.parse(localStorage.getItem('APP') || '{}'),
};

export default { fresh, local };
