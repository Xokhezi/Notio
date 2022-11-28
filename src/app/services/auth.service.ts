import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
login(credentials:any)
{
  console.log("succes")
}

isLogged()
{
  return true;
}
}


