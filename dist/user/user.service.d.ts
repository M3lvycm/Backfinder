import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        verificationToken: string | null;
        password: string;
        verified: boolean;
    } | null>;
    createUser(data: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
        verificationToken: string | null;
        password: string;
        verified: boolean;
    }>;
}
