import { IProfile } from '../../../models/models';

export const AccountCard = ({ profile }: { profile: IProfile }) => {
  return (
    <>
      <h2>Name: {profile?.name || []}</h2>
      <h2>Email: {profile?.email || []}</h2>
    </>
  );
};
