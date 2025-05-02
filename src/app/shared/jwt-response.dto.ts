// src/app/shared/models/jwt-response.dto.ts

export interface JwtResponseDto {
    token: string;
    type: string;
    username: string;
    roles: string[];
    userId: number;  
  }
  
  