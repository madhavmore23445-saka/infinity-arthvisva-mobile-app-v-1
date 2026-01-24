import React from 'react';
import { ScreenWrapper, InfoCard, ActionButton } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const IncentivesScreen = () => (
    <ScreenWrapper title="Incentives and Payouts">
        <InfoCard title="Pending Payout" value="₹ 15,200" icon="time-outline" color="#F7B731" />
        <InfoCard title="Total Earned" value="₹ 1,45,000" icon="card-outline" color="#20BF6B" />
        <ActionButton label="Withdraw Funds" icon="cloud-download-outline" />
    </ScreenWrapper>
);

export default IncentivesScreen;
