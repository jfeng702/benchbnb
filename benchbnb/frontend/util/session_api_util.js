
export const signUp = (user) => {
  return $.ajax({
    method: 'POST',
    data: { user },
    url: 'api/user'
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    data: { user },
    url: 'api/session'
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: `api/session`
  });
};
