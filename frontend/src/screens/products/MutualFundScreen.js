import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, ActionButton, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const MutualFundScreen = () => (
    <ScreenWrapper title="Mutual Fund">
        <InfoCard title="Top Performing" subtitle="Large Cap Fund" icon="stats-chart-outline" value="+18.4%" color="#20BF6B" />
        <View style={styles.featureList}>
            <Text style={styles.sectionTitle}>Investment Modes</Text>
            <Text style={styles.featureItem}>• Systematic Investment Plan (SIP)</Text>
            <Text style={styles.featureItem}>• Lumpsum Investment</Text>
        </View>
        <ActionButton label="Start a SIP" icon="trending-up" />
    </ScreenWrapper>
);

export default MutualFundScreen;
