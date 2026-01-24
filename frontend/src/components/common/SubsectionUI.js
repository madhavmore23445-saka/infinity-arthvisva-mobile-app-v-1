import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../constants/theme';

export const ScreenWrapper = ({ title, children }) => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.content}>
            {children}
        </View>
    </ScrollView>
);

export const InfoCard = ({ title, subtitle, icon, value, color }) => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <View style={[styles.iconBox, { backgroundColor: color + '10' }]}>
                <Ionicons name={icon} size={24} color={color} />
            </View>
            <View style={styles.cardTextContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubtitle}>{subtitle}</Text>
            </View>
        </View>
        {value && <Text style={[styles.cardValue, { color }]}>{value}</Text>}
    </View>
);

export const ActionButton = ({ label, icon, onPress }) => (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <Ionicons name={icon} size={20} color={theme.colors.white} />
        <Text style={styles.actionButtonText}>{label}</Text>
    </TouchableOpacity>
);

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    title: {
        ...theme.typography.h2,
        color: theme.colors.text,
    },
    content: {
        padding: theme.spacing.lg,
    },
    card: {
        backgroundColor: theme.colors.white,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        marginBottom: theme.spacing.md,
        ...theme.shadow,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.md,
    },
    cardTextContent: {
        flex: 1,
    },
    cardTitle: {
        ...theme.typography.h3,
        fontSize: 16,
        color: theme.colors.text,
    },
    cardSubtitle: {
        ...theme.typography.caption,
        color: theme.colors.textSecondary,
    },
    cardValue: {
        ...theme.typography.h2,
        marginTop: theme.spacing.sm,
        fontWeight: 'bold',
    },
    sectionTitle: {
        ...theme.typography.label,
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.sm,
        color: theme.colors.textSecondary,
    },
    featureList: {
        marginBottom: theme.spacing.lg,
    },
    featureItem: {
        ...theme.typography.body,
        marginBottom: 8,
        color: theme.colors.text,
    },
    actionButton: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        gap: 8,
        marginTop: theme.spacing.md,
        ...theme.shadow,
    },
    actionButtonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
    grid: {
        flexDirection: 'column',
    },
    emptyText: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
        fontStyle: 'italic',
    },
    progressBarBg: {
        height: 12,
        backgroundColor: theme.colors.surface,
        borderRadius: 6,
        overflow: 'hidden',
        marginTop: theme.spacing.xs,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: theme.colors.primary,
    },
    progressText: {
        ...theme.typography.caption,
        marginTop: 8,
        color: theme.colors.textSecondary,
    },
    leadCard: {
        backgroundColor: theme.colors.white,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.sm,
        borderLeftWidth: 4,
        borderLeftColor: theme.colors.primary,
        marginBottom: theme.spacing.sm,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    leadName: {
        ...theme.typography.h3,
        fontSize: 16,
    },
    leadInfo: {
        ...theme.typography.caption,
        color: theme.colors.textSecondary,
        marginTop: 4,
    },
    downloadItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        marginBottom: theme.spacing.sm,
        gap: 12,
    },
    downloadText: {
        ...theme.typography.body,
        color: theme.colors.text,
    },
});
