import PocketBase from 'pocketbase';

const pocketbase = new PocketBase('http://127.0.0.1:8090');
await pocketbase.admins.authWithPassword(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);

export default pocketbase;
