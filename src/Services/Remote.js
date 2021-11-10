import remoteConfig from '@react-native-firebase/remote-config';

async function fetchRemote() {
  return remoteConfig()
    .setDefaults({
      development: false,
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(fetchedRemotely => {
      if (fetchedRemotely) {
        console.log('Service remote', fetchedRemotely);
        return fetchedRemotely;
      } else {
        return false;
      }
    });
}

export const remoteService = {
  fetchRemote,
};
