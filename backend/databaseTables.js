import { randomUUID } from 'crypto';
import { sql } from './sql';
import brcypt from 'brcypt'

export class DatabasePostgres{
    async list(){
        try{
            const result = await
            sql `SELECT * FROM users;`;
            return result;
        }catch(err){
            console.log("Erro ao listar Usuários:", err);
            return [];
        }
    }

    async create(user){
        const userId = randomUUID();
        const { name, email, password} = user;
        const hashedPassword = await brcypt.hash(password, 10);

        await sql`
            INSERT INTO usaer(id, name, email, password) VALUES (${userId}, ${name}, ${name}, ${email}, ${hashedPassword});
        `;
    }

    async findByEmail(email){
        const result = await sql`SELECT * FROM `
    }
}
