import firebase from '../firebase';

import {addComment} from './comments/actions';
import {addContribution} from './contributions/actions';
import {addUser} from './users/actions';
import {addProject} from './projects/actions';
import {updateProject} from './projects/actions';

export const stopSyncingData = () => (dispatch, getState) => {
  firebase
    .database()
    .ref('/comments')
    .off();

  firebase
    .database()
    .ref('/users')
    .off();

  firebase
    .database()
    .ref('/contributions')
    .off();

  firebase
    .database()
    .ref('/projects')
    .off();
}

export const startSyncingData = () => (dispatch, getState) => {
  firebase
    .database()
    .ref('/users')
    .on('child_added', (snap) => dispatch(addUser(snap.key, snap.val())));

  firebase
    .database()
    .ref('/comments')
    .on('child_added', (snap) => dispatch(addComment(snap.key, snap.val())));

  firebase
    .database()
    .ref('/contributions')
    .on('child_added', (snap) => dispatch(addContribution(snap.key, snap.val())));

  const projectRef = firebase.database().ref('/projects')
  projectRef.on('child_added', (snap) => dispatch(addProject(snap.key, snap.val())));
  projectRef.on('child_changed', (snap) => dispatch(updateProject(snap.key, snap.val())));
};
