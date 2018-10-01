
export const signUp = (user) => {
  return $.ajax({
    method: 'POST',
    user,
    url: 'api/user'
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    user,
    url: 'api/session'
  });
};

export const logout = user => {
  return $.ajax({
    method: 'DELETE',
    url: `api/session/${user.id}`
  });
};
