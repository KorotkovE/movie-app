// import AuthContext from '../../../context/AuthContext';
// import { useCallback, useEffect, useContext, useState } from 'react';
// import { useHttp } from '../../hooks/http.hook';
// import { AccountCard } from './AccountCard';

// export const AccountPage = () => {
//   const [profile, setProfile] = useState(null);
//   const { token } = useContext(AuthContext);
//   const { request } = useHttp();

//   const getMe = useCallback(async () => {
//     try {
//       const fetched = await request('/api/auth/me', 'GET', null, {
//         Authorization: `Bearer ${token}`,
//       });
//       setProfile(fetched);
//     } catch (e) {}
//   }, [token, request]);

//   useEffect(() => {
//     getMe();
//   }, [getMe]);

//   return <>{profile && <AccountCard profile={profile} />}</>;
// };

import { useQuery } from '@tanstack/react-query';
import { UseProfile } from '../../../service/auth';
import { AccountCard } from './AccountCard';
import { useEffect, useState } from 'react';
import { IProfile } from '../../../models/models';

export const AccountPage = () => {
  const [profile, setProfile] = useState<IProfile>();
  const { data: getMeProfile } = useQuery({
    queryKey: ['getProfile'],
    queryFn: () => UseProfile(),
  });
  useEffect(() => {
    setProfile(getMeProfile);
  }, []);

  return <>{profile && <AccountCard profile={profile} />}</>;
};
