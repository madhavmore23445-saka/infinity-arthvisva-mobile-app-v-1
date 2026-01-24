import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const DashboardScreen = () => (
    <ScreenWrapper title="Dashboard">
        <View style={styles.grid}>
            <InfoCard title="Total Leads" value="128" icon="people-outline" color={theme.colors.primary} />
            <InfoCard title="Revenue" value="₹ 4.2L" icon="cash-outline" color="#20BF6B" />
        </View>
        <Text style={styles.sectionTitle}>Monthly Target</Text>
        <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '65%' }]} />
        </View>
        <Text style={styles.progressText}>65% of monthly target achieved</Text>
    </ScreenWrapper>
);

export default DashboardScreen;
