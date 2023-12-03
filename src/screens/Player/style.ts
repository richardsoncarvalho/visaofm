import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#01012A',
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperTitleAndAir: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  wrapperSocialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  buttonSocial: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
  facebook: {
    backgroundColor: '#3b5998',
  },
  instagram: {
    backgroundColor: '#dd2a7b',
  },
  youtube: {
    backgroundColor: '#ff0000',
  },
  whatsapp: {
    backgroundColor: '#25D366',
  },
  playerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    height: 75,
    width: 75,
  },
  play: {
    backgroundColor: '#2ECC71',
  },
  pause: {
    backgroundColor: '#E67E22',
  },
  wrapperBanner: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 110,
    marginVertical: 30,
  },
});
