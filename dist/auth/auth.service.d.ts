import { UsersService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwt;
    constructor(usersService: UsersService, jwt: JwtService);
    register(email: string, password: string): Promise<{
        message: string;
        userId: number;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
