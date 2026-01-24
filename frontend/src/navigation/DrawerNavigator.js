import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs from './AppTabs';
import CustomDrawerContent from '../components/CustomDrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
// Products
import HomeLoanScreen from '../screens/products/HomeLoanScreen';
import CarLoanScreen from '../screens/products/CarLoanScreen';
import InsuranceScreen from '../screens/products/InsuranceScreen';
import MutualFundScreen from '../screens/products/MutualFundScreen';
import InvestmentScreen from '../screens/products/InvestmentScreen';
// Primary
import DashboardScreen from '../screens/primary/DashboardScreen';
import LeadManagementScreen from '../screens/primary/LeadManagementScreen';
// Secondary
import ClientPortfolioScreen from '../screens/secondary/ClientPortfolioScreen';
import IncentivesScreen from '../screens/secondary/IncentivesScreen';
import MarketingScreen from '../screens/secondary/MarketingScreen';
import DownloadsScreen from '../screens/secondary/DownloadsScreen';

import theme from '../constants/theme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.background,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                },
                headerTintColor: theme.colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                drawerStyle: {
                    width: '80%',
                    backgroundColor: theme.colors.background,
                },
            }}
        >
            <Drawer.Screen
                name="MainTabs"
                component={AppTabs}
                options={{ title: 'Home' }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'My Profile' }}
            />

            {/* Products */}
            <Drawer.Screen name="HomeLoan" component={HomeLoanScreen} options={{ title: 'Home Loan' }} />
            <Drawer.Screen name="CarLoan" component={CarLoanScreen} options={{ title: 'Car Loan' }} />
            <Drawer.Screen name="Insurance" component={InsuranceScreen} options={{ title: 'Insurance' }} />
            <Drawer.Screen name="MutualFund" component={MutualFundScreen} options={{ title: 'Mutual Fund' }} />
            <Drawer.Screen name="Investment" component={InvestmentScreen} options={{ title: 'Investment' }} />

            {/* Primary */}
            <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
            <Drawer.Screen name="LeadManagement" component={LeadManagementScreen} options={{ title: 'Lead Management' }} />

            {/* Secondary */}
            <Drawer.Screen name="ClientPortfolio" component={ClientPortfolioScreen} options={{ title: 'Client Portfolio' }} />
            <Drawer.Screen name="Incentives" component={IncentivesScreen} options={{ title: 'Incentives & Payouts' }} />
            <Drawer.Screen name="Marketing" component={MarketingScreen} options={{ title: 'Marketing Campaign' }} />
            <Drawer.Screen name="Downloads" component={DownloadsScreen} options={{ title: 'Downloads' }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
