import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAunth: AngularFireAuth) { }
  async registerUser(email:string,password:string,name:string){
    return await this.ngFireAunth.createUserWithEmailAndPassword(email,password)
  }

  async loginUser(email:string,password:string){
    return await this.ngFireAunth.signInWithEmailAndPassword(email,password)
  }

  async resetPassword(email:string){
    return await this.ngFireAunth.sendPasswordResetEmail(email)
  }

  async singOut(){
    return await this.ngFireAunth.signOut()
  }

  async getProfile(){
    return await this.ngFireAunth.currentUser
  }
}
