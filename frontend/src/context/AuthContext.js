import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

// Create an axios instance with a default base URL
// Replace with your local machine's IP address if testing on a physical device
// const API_URL = 'http://localhost:3000/api';
const API_URL = 'http://10.245.129.48:3000/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load token on startup
    useEffect(() => {
        const loadStorageData = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('userToken');
                const storedUser = await AsyncStorage.getItem('userData');

                if (storedToken) {
                    setToken(storedToken);
                    setUser(JSON.parse(storedUser));
                    // Set default authorization header
                    axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
                }
            } catch (e) {
                console.error('Failed to load storage data', e);
            } finally {
                setLoading(false);
            }
        };

        loadStorageData();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, password });
            const { token, ...userData } = response.data;

            await AsyncStorage.setItem('userToken', token);
            await AsyncStorage.setItem('userData', JSON.stringify(userData));

            setToken(token);
            setUser(userData);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const signup = async (name, email, password , phone , rmcode) => {
        try {
            const response = await axios.post(`${API_URL}/auth/signup`, { name, email, password , phone , rmcode});
            const { token, ...userData } = response.data;

            await AsyncStorage.setItem('userToken', token);
            await AsyncStorage.setItem('userData', JSON.stringify(userData));

            setToken(token);
            setUser(userData);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Signup failed'
            };
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userData');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
