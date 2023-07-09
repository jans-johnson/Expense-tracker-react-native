import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Transaction} from '../../models/TransactionModel';
import LinearGradient from 'react-native-linear-gradient';
import {CategoryType} from '../../models/CategoryModel';

const TransactionItem = (props: Transaction) => {
  return (
    <View style={styles.categoryItem}>
      <View style={{flexDirection: 'row', marginVertical:5}}>
        <LinearGradient
          colors={
            props.type === CategoryType.income
              ? ['rgba(0, 207, 2, 0.8)', 'rgba(0, 137, 0, 0.86)']
              : ['rgba(240, 0, 0, 0.8)', 'rgba(151, 0, 0, 0.8)']
          }
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: 'red',
            margin: 5,
          }}
        />
        <View style={{marginVertical:10, marginLeft:10, justifyContent:'space-around'}}>
          <Text style={styles.headingStyle}>{props.purpose}</Text>
          <Text style={styles.dateStyle}>{new Date(props.date).toDateString().slice(4,10)}</Text>
        </View>
      </View>
      <Text style={(props.type===CategoryType.expense)?{color:'red',fontSize:20}:{color:'green',fontSize:20}}>{'\u20B9'} {props.amount}</Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.shadow,
    elevation: 5,
    flexDirection: 'row',
    paddingLeft: 7,
    paddingRight: 24,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
  },
  headingStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight:'700'
  },
  dateStyle:{
    color: 'grey'
  }
});
