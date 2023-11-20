// styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust the space distribution
  },
  headerTitle: {
    fontSize: 20,
    //flex: 1,
    textAlign: 'center',
  },
  
  headerSubTitle: {
    fontSize: 12,
    color: 'grey',
    // Aligning to the right
    marginRight: 10,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'orange',
  },
  spacer: {
    width: 40,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  listItemText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  noDataText: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: 'orange',
  },
  spacer: {
    width: 40, // Match the size of the back button for balance
  },
  infoContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  makeItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  makeText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  noMakeText: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  yearItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  yearText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  modelItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  modelText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
});
