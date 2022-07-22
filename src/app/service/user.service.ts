import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';
import { UserMock } from '../service/user.mock';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const myHeaders = new HttpHeaders({ myheader: 'headervalue' });

    return this.http.get<User[]>(this.apiUrl + '/users', {
      headers: myHeaders,
    });
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/users/1');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', UserMock);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + `/users/${user.id}`, UserMock);
  }

  patchUser(id: number): Observable<User> {
    return this.http.patch<User>(this.apiUrl + `/users/${id}`, UserMock);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + `/users/${id}`);
  }
}
