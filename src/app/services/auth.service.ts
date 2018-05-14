import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()

export class AuthService {

  constructor() { }

  // Créer un nouvel utilisateur
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            const user = {
              uid: firebase.auth().currentUser.uid,
              email: firebase.auth().currentUser.email
            };
            firebase.database().ref(`users/${user.uid}`).set(user);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // Supprimer un utilisateur
  deleteUser(){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().currentUser.delete().then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  // Modification de mot de passe
  modificationPasswordUser(){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email).then(
          () => {
            resolve('le mail de réinitialisation du mot de passe a été envoyé');
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  // Connection d'un utilisateur
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // Déconnecter un utilisateur
  signOutUser() {
    firebase.auth().signOut();
  }

}
