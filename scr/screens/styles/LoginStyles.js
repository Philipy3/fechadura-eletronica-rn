import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: "#0D0D0D" 
  },
  waveContainer: { 
    position: "absolute", 
    top: 0, 
    width: width, 
    zIndex: 0 
  },
  scrollContent: { 
    flexGrow: 1, 
    justifyContent: "center", 
    paddingHorizontal: 35,
    paddingTop: 40, 
    paddingBottom: 20, 
  },
  header: { 
    marginBottom: 30 
  },
  ifLogoContainer: { 
    flexDirection: "row", 
    marginBottom: 10 
  },
  dot: { 
    width: 14, 
    height: 14, 
    borderRadius: 7, 
    marginRight: 8 
  },
  title: { 
    fontSize: 52, 
    fontWeight: "900", 
    color: "#FFF", 
    letterSpacing: 2 
  },
  subtitle: { 
    fontSize: 16, 
    color: "#2F9E41", 
    fontWeight: "700", 
    marginTop: -8 
  },
  form: { 
    width: "100%" 
  },
  label: { 
    color: "#AAA", 
    marginBottom: 8, 
    fontSize: 12, 
    fontWeight: "700" 
  },
  input: {
    backgroundColor: "#161616",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#222",
  },
  loginButton: {
    backgroundColor: "#2F9E41",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 10,
  },
  buttonText: { 
    color: "#FFF", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  footerInside: {
    marginTop: 40,
    alignItems: "center",
  },
  footerText: { 
    color: "#222", 
    fontSize: 12, 
    fontWeight: "900" 
  },
});