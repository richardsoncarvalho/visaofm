import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperTitleAndAir: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  onAir: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#fff',
    marginBottom: 10,
  },
  wrapperLogo: {
    borderRadius: 10,
    height: 160,
    overflow: 'hidden',
    width: 160,
    padding: 5,
  },
  logo: {
    flex: 1,
  },
  wrapperContent: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#f1f1f1',
    textAlign: 'center',
  },
});
