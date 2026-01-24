import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper, InfoCard, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const InsuranceScreen = () => (
    <ScreenWrapper title="Insurance">
        <View style={styles.grid}>
            <InfoCard title="Health" subtitle="Family Floater" icon="heart-outline" color="#20BF6B" />
            <InfoCard title="Life" subtitle="Term Insurance" icon="person-outline" color="#4B7BEC" />
            <InfoCard title="Motor" subtitle="Third Party" icon="car-sport-outline" color="#F7B731" />
        </View>
        <Text style={styles.sectionTitle}>Recent Policies</Text>
        <Text style={styles.emptyText}>No active policies found.</Text>
    </ScreenWrapper>
);

export default InsuranceScreen;
