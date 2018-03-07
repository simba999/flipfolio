import {
  compose,
  setDisplayName,
  withHandlers,
} from 'recompose';
import ProfileEdit from './ProfileEdit';
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  setDisplayName('ProfileEdit'),
  withHandlers({
    back: ({ navigator }) => () => navigator.popPage(),
  })
);

const ProfileEditContainer = withAuth(enchance(ProfileEdit));

export default ProfileEditContainer;
