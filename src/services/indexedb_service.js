import Dexie from 'dexie';

const db = new Dexie('ViGymDB');
db.version(1).stores({ gymnase: '++id' });

export default db;