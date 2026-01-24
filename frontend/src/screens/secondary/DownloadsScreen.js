import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenWrapper, styles } from '../../components/common/SubsectionUI';
import theme from '../../constants/theme';

const DownloadsScreen = () => (
    <ScreenWrapper title="Downloads">
        <Text style={styles.sectionTitle}>Recent Documents</Text>
        <TouchableOpacity style={styles.downloadItem}>
            <Ionicons name="document-text-outline" size={24} color={theme.colors.text} />
            <Text style={styles.downloadText}>Home Loan Application Form.pdf</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadItem}>
            <Ionicons name="document-text-outline" size={24} color={theme.colors.text} />
            <Text style={styles.downloadText}>Partner Training Guide.pdf</Text>
        </TouchableOpacity>
    </ScreenWrapper>
);

export default DownloadsScreen;
