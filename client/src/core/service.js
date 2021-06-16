import config from '../config.json';

export const coreService = {
    setItem: (key, value) => {
        localStorage.setItem(key, value);
    },
    getItem: (key) => {
        return localStorage.getItem(key);
    },
    setObjectItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getObjectItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    removeItem: (key) => {
        localStorage.removeItem(key);
    },
    getConfig: (key) => {
        if (key) return config[key] || false;
        return config || false;
    },
    isEmptyObject: (value) => {
        if (typeof value !== 'object') {
            return false;
        }
        const param = value || {};
        return Object.keys(param).length === 0;
    }
}