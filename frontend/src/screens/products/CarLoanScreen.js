import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, ActionButton, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const CarLoanScreen = () => (
    <ScreenWrapper title="Car Loan">
        <InfoCard
            title="Express Car Loan"
            subtitle="Zero processing fee for elite clients"
            icon="car-outline"
            value="9.25% p.a."
            color="#FF6B6B"
        />
        <View style={styles.featureList}>
            <Text style={styles.sectionTitle}>Required Documents</Text>
            <Text style={styles.featureItem}>• Last 6 months Bank Statement</Text>
            <Text style={styles.featureItem}>• 3 months Salary Slips</Text>
            <Text style={styles.featureItem}>• Address & ID Proof</Text>
        </View>
        <ActionButton label="Check Eligibility" icon="checkmark-circle-outline" />
    </ScreenWrapper>
);

export default CarLoanScreen;
