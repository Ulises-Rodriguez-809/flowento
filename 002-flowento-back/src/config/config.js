import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_WORD = process.env.COOKIE_WORD;
const COOKIE_PARSER_WORD = process.env.COOKIE_PARSER_WORD;
const EMAIL_NODEMAILER = process.env.EMAIL_NODEMAILER;
const EMAIL_NODEMAILER_PASSWORD = process.env.EMAIL_NODEMAILER_PASSWORD;

export const options = {
    PORT,
    DATABASE_URL,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    COOKIE_WORD,
    COOKIE_PARSER_WORD,
    EMAIL_NODEMAILER,
    EMAIL_NODEMAILER_PASSWORD,
}