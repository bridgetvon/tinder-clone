import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "BKNooTgMwJhGaMmosEI-q19YqgLxfzSmFY1JOetQMjWPtj9Pxkm-qfGwzS5e_C0dYjl0ZHhl9CCsvRYkC-Ho8sE"
  });
}

export const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }