import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import theme from '../constants/theme';

const ProfileScreen = () => {
    const { user } = useAuth();

    const renderDetailItem = (icon, label, value) => (
        <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={22} color={theme.colors.primary} />
            </View>
            <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>{label}</Text>
                <Text style={styles.detailValue}>{value || 'N/A'}</Text>
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'U'}</Text>
                </View>
                <Text style={styles.userName}>{user?.name || 'User Name'}</Text>
                <Text style={styles.userEmail}>{user?.email || 'user@example.com'}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <View style={styles.card}>
                    {renderDetailItem('person-outline', 'Full Name', user?.name)}
                    {renderDetailItem('mail-outline', 'Email Address', user?.email)}
                    {renderDetailItem('call-outline', 'Phone Number', user?.phone)}
                    {renderDetailItem('gift-outline', 'Referral Code', user?.rmcode)}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Settings</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.settingItem}>
                        <Ionicons name="notifications-outline" size={22} color={theme.colors.text} />
                        <Text style={styles.settingText}>Notifications</Text>
                        <Ionicons name="chevron-forward" size={20} color={theme.colors.border} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Ionicons name="lock-closed-outline" size={22} color={theme.colors.text} />
                        <Text style={styles.settingText}>Privacy & Security</Text>
                        <Ionicons name="chevron-forward" size={20} color={theme.colors.border} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Ionicons name="help-circle-outline" size={22} color={theme.colors.text} />
                        <Text style={styles.settingText}>Help Support</Text>
                        <Ionicons name="chevron-forward" size={20} color={theme.colors.border} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        alignItems: 'center',
        paddingVertical: theme.spacing.xl,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    avatarContainer: {
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
    userName: {
        ...theme.typography.h2,
        color: theme.colors.text,
    },
    userEmail: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
        marginTop: 4,
    },
    section: {
        padding: theme.spacing.lg,
    },
    sectionTitle: {
        ...theme.typography.label,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.sm,
    },
    card: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        overflow: 'hidden',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.surface,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.md,
    },
    detailContent: {
        flex: 1,
    },
    detailLabel: {
        ...theme.typography.caption,
        color: theme.colors.textSecondary,
    },
    detailValue: {
        ...theme.typography.body,
        color: theme.colors.text,
        fontWeight: '500',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.surface,
    },
    settingText: {
        flex: 1,
        ...theme.typography.body,
        marginLeft: theme.spacing.md,
        color: theme.colors.text,
    },
});

export default ProfileScreen;
