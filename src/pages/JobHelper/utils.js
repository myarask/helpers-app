const getIndex = status => {
  switch (status) {
    case 'draft':
      return 0;
    case 'cancelled':
      return 1;
    case 'open':
      return 2;
    case 'reserved':
      return 3;
    case 'in_progress':
      return 4;
    case 'reviewing':
      return 5;
    case 'complete':
      return 6;
    default:
      return 0; // Unauthorized
  }
};

export { getIndex };
