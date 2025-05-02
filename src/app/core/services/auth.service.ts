// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject, Observable } from 'rxjs';

import { JwtResponseDto } from '../../shared/jwt-response.dto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = 'http://localhost:8081/auth';
  private readonly tokenKey = 'JWT_TOKEN';
  private readonly userIdKey = 'USER_ID';               // ← nueva clave
  private readonly _isLogged = new BehaviorSubject<boolean>(!!this.token);
  public isLogged$ = this._isLogged.asObservable();

  constructor(private readonly http: HttpClient) {}

  /**
   * Llama a /auth/login, guarda token y userId en localStorage
   */
  login(username: string, password: string): Observable<JwtResponseDto> {
    return this.http
      .post<JwtResponseDto>(`${this.api}/login`, { username, password })
      .pipe(
        tap(response => {
          // 1) guardamos el token
          localStorage.setItem(this.tokenKey, response.token);
          // 2) guardamos el userId
          localStorage.setItem(this.userIdKey, response.userId.toString());
          this._isLogged.next(true);
        })
      );
  }

  /**
   * Limpia token y userId
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userIdKey);
    this._isLogged.next(false);
  }

  /** Devuelve el JWT bruto */
  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /** Extrae el userId ya guardado (o null) */
  get userId(): number | null {
    const id = localStorage.getItem(this.userIdKey);
    return id !== null ? +id : null;
  }
}
