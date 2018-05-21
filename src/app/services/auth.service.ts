import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class AuthService {

  user: User;
  userSubject = new Subject<User>();

  constructor() { }

  // Observe les changements des données de l'utilisateur
  emitUser() {
    this.userSubject.next(this.user);
  }

  // Sauvegarde les changements du profil
  saveUser() {
    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).set(this.user);
  }

  // Retourne les informations personnelles de l'utilisateur
  getUser() {
    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`)
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.user = data.val() ? data.val() : [];
          this.emitUser();
        }
      );
  }

  // Créer un nouvel utilisateur
  createNewUser(firstname: string, lastname: string, email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            const user = {
              uid: firebase.auth().currentUser.uid,
              email: firebase.auth().currentUser.email,
              firstname: firstname,
              lastname: lastname
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
            this.signOutUser();
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
  modificationPasswordUser(email){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email).then(
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

  // Modification de l'adresse email
  modificationEmailUser(email){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().currentUser.updateEmail(email).then(
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
