import { getDataFromToken } from '../../shared/authentication';

const getContext = async ({ token }) => {
  const { tokenData, user: me } = await getDataFromToken(token);
  return {
    me,
    tokenData,
  };
};

export default getContext;
