import { StyleSheet } from 'react-native';
import { baseFontSize, boldFont } from 'constants/constants';

const MoreProfileSectionStyles = StyleSheet.create({
  profileSectionContainer: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  profileIconContainer: {
    marginRight: 25,
    borderWidth: 0.5,
    borderColor: '#666666',
    borderRadius: 200,
  },
  profileIcon: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  name: {
    fontFamily: boldFont,
    fontSize: baseFontSize + 2,
  },
});

export default MoreProfileSectionStyles;
