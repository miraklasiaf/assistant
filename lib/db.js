import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createWorkout(data) {
  return firestore.collection('workout').add(data);
}

export function deleteWorkout(id) {
  return firestore.collection('workout').doc(id).delete();
}
