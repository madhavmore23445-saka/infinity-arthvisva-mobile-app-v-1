import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, ActionButton, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const LeadManagementScreen = () => (
    <ScreenWrapper title="Lead Management">
        <Text style={styles.sectionTitle}>Active Leads</Text>
        <View style={styles.leadCard}>
            <Text style={styles.leadName}>Madhav More</Text>
            <Text style={styles.leadInfo}>Product: Home Loan | Status: In-Progress</Text>
        </View>
        <View style={styles.leadCard}>
            <Text style={styles.leadName}>Angad Agrawal</Text>
            <Text style={styles.leadInfo}>Product: Mutual Fund | Status: Follow-up</Text>
        </View>
        <ActionButton label="Generate New Lead" icon="person-add-outline" />
    </ScreenWrapper>
);

export default LeadManagementScreen;
