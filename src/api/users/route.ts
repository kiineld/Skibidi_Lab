import {prisma} from "../../../prisma/prisma-client.ts";


export async function GET() {
    const users = await prisma.user.findMany();
    return JSON.stringify(users);
}

