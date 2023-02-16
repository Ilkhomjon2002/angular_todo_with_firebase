import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from "firebase/auth"
import { User } from '../user/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any

  constructor(public afs:AngularFirestore, public afAuth:AngularFireAuth, public router: Router,public ngZone:NgZone){
    this.afAuth.authState.subscribe((user)=>{
      if(user){
        this.userData=user;
        localStorage.setItem("user",JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user")!)
      }
      else{
        localStorage.setItem("user","null");
        JSON.parse(localStorage.getItem("user")!)
      }
    })

  }
  SignIn(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.SetUserData(res.user);
      this.afAuth.authState.subscribe((user)=>{
        if(user){
          this.router.navigate(["dashboard"])
        }
      })
    }).catch((err)=>{
      window.alert(err.message)
    })
  }
  SignUp(email:string,password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password).then((result)=>{
      this.SendVerificationMail()
      this.SetUserData(result.user)

    }).catch(err=>{
      window.alert(err.message)
    })
  }
  SendVerificationMail(){
    return this.afAuth.currentUser.then((u:any)=>u.SendVerificationMail()).then(()=>{
      this.router.navigate(["verify-email-address"])
    })
  }
  ForgotPassword(passwordResetEmail:string){
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(()=>{
      window.alert("Password reset email sent, check your inbox.")
    })
    .catch((error)=>{
      window.alert(error)
    })
  }
  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem("user")!)
    return user !==null && user.emailVerfied !== false?true : false
  }

  GoogleAuth(){
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res:any)=>{
      this.router.navigate(["dashboard"])
    })
  }
  AuthLogin(provider:any){
    return this.afAuth.signInWithPopup(provider).then(res=>{
      this.router.navigate(["dashboard"]);
      this.SetUserData(res.user);
    }).catch((err)=>{
      window.alert(err)
    })
  }
  SetUserData(user:any){
    const userRef:AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    )
    const userData:User={
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      emailVerfied:user.emailVerfied
      
    }
    return userRef.set(userData,{
      merge:true
    })
  }
  SignOut(){
    return this.afAuth.signOut().then(()=>{
      localStorage.removeItem("user")
      this.router.navigate(["sign-in"])
    })
  }




}
