import { useQuery } from '@tanstack/react-query';
import { AccountCard } from './AccountCard';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import { getProfile } from '../../../service/auth';

export const AccountPage = () => {
  const { token, userId } = useContext(AuthContext);
  const { data: getMeProfile } = useQuery({
    queryKey: ['getProfile'],
    queryFn: () => {
      if (token) {
        return getProfile(token, userId);
      }
    },
    enabled: !!token,
  });

  return <>{getMeProfile && <AccountCard profile={getMeProfile} />}</>;
};
