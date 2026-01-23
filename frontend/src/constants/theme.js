export const theme = {
    colors: {
        primary: '#6C63FF',      // Vibrant Indigo
        secondary: '#FF6584',    // Modern Soft Pink
        accent: '#00D2B4',       // Fresh Teal
        background: '#FFFFFF',   // Neutral White
        surface: '#F8F9FA',      // Light Gray Surface
        text: '#2D3436',         // Dark Slate Text
        textSecondary: '#636E72', // Subtle Muted Gray
        error: '#FF7675',        // Soft Coral Error
        success: '#55EFC4',      // Mint Success
        border: '#DFE6E9',       // Cool Gray Border
        white: '#FFFFFF',
        black: '#000000',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
    },
    borderRadius: {
        sm: 8,
        md: 12,
        lg: 20,
        xl: 30,
        round: 100,
    },
    typography: {
        h1: { fontSize: 32, fontWeight: 'bold' },
        h2: { fontSize: 24, fontWeight: '700' },
        h3: { fontSize: 20, fontWeight: '600' },
        body: { fontSize: 16, fontWeight: '400' },
        caption: { fontSize: 12, fontWeight: '300' },
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    }
};

export default theme;
