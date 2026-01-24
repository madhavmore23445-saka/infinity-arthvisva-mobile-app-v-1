import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, ActionButton, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const HomeLoanScreen = () => (
    <ScreenWrapper title="Home Loan">
        <InfoCard
            title="Current Interest Rate"
            subtitle="Starting from yearly basis"
            icon="home-outline"
            value="8.50% p.a."
            color={theme.colors.primary}
        />
        <View style={styles.featureList}>
            <Text style={styles.sectionTitle}>Key Benefits</Text>
            <Text style={styles.featureItem}>• Low Processing Fees</Text>
            <Text style={styles.featureItem}>• Flexible Tenure up to 30 Years</Text>
            <Text style={styles.featureItem}>• Quick Approval Process</Text>
        </View>
        <ActionButton label="Apply for Home Loan" icon="add-circle-outline" />
    </ScreenWrapper>
);

export default HomeLoanScreen;
