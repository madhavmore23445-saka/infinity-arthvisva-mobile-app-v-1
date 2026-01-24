import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const ClientPortfolioScreen = () => (
    <ScreenWrapper title="Client Portfolio">
        <InfoCard title="Total Clients" value="45" icon="people-circle-outline" color={theme.colors.primary} />
        <Text style={styles.sectionTitle}>Recent Onboarding</Text>
        <Text style={styles.emptyText}>Rahul Sharma joined yesterday.</Text>
    </ScreenWrapper>
);

export default ClientPortfolioScreen;
