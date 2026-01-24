import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const MarketingScreen = () => (
    <ScreenWrapper title="Marketing Campaign">
        <InfoCard title="Active Campaigns" value="3" icon="megaphone-outline" color="#FF6B6B" />
        <View style={styles.featureList}>
            <Text style={styles.sectionTitle}>Current Reach</Text>
            <Text style={styles.featureItem}>• Facebook Ads: 4.5k Reach</Text>
            <Text style={styles.featureItem}>• Email Blast: 1.2k Opened</Text>
        </View>
    </ScreenWrapper>
);

export default MarketingScreen;
