import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const InvestmentScreen = () => (
    <ScreenWrapper title="Investment">
        <InfoCard title="Portfolio Growth" subtitle="Cumulative earnings" icon="wallet-outline" value="₹ 12,50,000" color={theme.colors.primary} />
        <View style={styles.grid}>
            <InfoCard title="Gold" subtitle="Safe haven" icon="medal-outline" color="#F7B731" />
            <InfoCard title="Stocks" subtitle="High yield" icon="bar-chart-outline" color="#4B7BEC" />
        </View>
    </ScreenWrapper>
);

export default InvestmentScreen;
