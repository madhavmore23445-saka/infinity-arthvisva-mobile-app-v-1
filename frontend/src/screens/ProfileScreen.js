import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import theme from '../constants/theme';

const ProfileScreen = () => {
    const { user, logout } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'U'}</Text>
                </View>
                <Text style={styles.name}>{user?.name || 'User'}</Text>
                <Text style={styles.email}>{user?.email || 'user@example.com'}</Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={logout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.lg,
    },
    header: {
        alignItems: 'center',
        marginTop: theme.spacing.xxl,
        marginBottom: theme.spacing.xxl,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
        ...theme.shadow,
    },
    avatarText: {
        fontSize: 40,
        color: theme.colors.white,
        fontWeight: 'bold',
    },
    name: {
        ...theme.typography.h2,
        color: theme.colors.text,
    },
    email: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
    },
    menu: {
        marginTop: theme.spacing.xl,
    },
    menuItem: {
        padding: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    menuItemText: {
        ...theme.typography.body,
        color: theme.colors.text,
    },
    logoutItem: {
        borderBottomWidth: 0,
        marginTop: theme.spacing.xl,
    },
    logoutText: {
        ...theme.typography.body,
        color: theme.colors.error,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default ProfileScreen;
