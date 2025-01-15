import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { currencyParser, getScreenWidth, getStatusBarHeightByOS } from './src/utils/helpers';
import { Gap } from './src/components';
import moment from 'moment';
import { PieChart } from 'react-native-chart-kit';


const dummyData = [
  { id: 1, type: 'income', category: 'salary', amount: 10000000, datetime: '2023-01-01T08:00:00Z', description: 'Monthly salary' },
  { id: 2, type: 'expense', category: 'food', amount: 150000, datetime: '2023-01-02T12:30:00Z', description: 'Groceries' },
  { id: 3, type: 'expense', category: 'transportation', amount: 20000, datetime: '2023-01-03T09:00:00Z', description: 'Bus fare' },
  { id: 4, type: 'income', category: 'freelance', amount: 2000000, datetime: '2023-01-04T14:00:00Z', description: 'Freelance project' },
  { id: 5, type: 'expense', category: 'entertainment', amount: 100000, datetime: '2023-01-05T19:00:00Z', description: 'Movie tickets' },
  { id: 6, type: 'expense', category: 'food', amount: 300000, datetime: '2023-01-06T20:00:00Z', description: 'Dinner' },
  { id: 7, type: 'income', category: 'gift', amount: 500000, datetime: '2023-01-07T10:00:00Z', description: 'Birthday gift' },
  { id: 8, type: 'expense', category: 'transportation', amount: 50000, datetime: '2023-01-08T08:30:00Z', description: 'Taxi fare' },
  { id: 9, type: 'expense', category: 'utilities', amount: 800000, datetime: '2023-01-09T18:00:00Z', description: 'Electricity bill' },
  { id: 10, type: 'income', category: 'investment', amount: 3000000, datetime: '2023-01-10T15:00:00Z', description: 'Stock dividends' },
  { id: 11, type: 'expense', category: 'food', amount: 250000, datetime: '2023-01-11T13:00:00Z', description: 'Lunch' },
  { id: 12, type: 'expense', category: 'entertainment', amount: 600000, datetime: '2023-01-12T20:00:00Z', description: 'Concert tickets' },
  { id: 13, type: 'income', category: 'salary', amount: 10000000, datetime: '2023-01-13T08:00:00Z', description: 'Monthly salary' },
  { id: 14, type: 'expense', category: 'transportation', amount: 10000, datetime: '2023-01-14T09:00:00Z', description: 'Train fare' },
  { id: 15, type: 'expense', category: 'food', amount: 400000, datetime: '2023-01-15T12:30:00Z', description: 'Groceries' },
  { id: 16, type: 'income', category: 'freelance', amount: 2500000, datetime: '2023-01-16T14:00:00Z', description: 'Freelance project' },
  { id: 17, type: 'expense', category: 'entertainment', amount: 900000, datetime: '2023-01-17T19:00:00Z', description: 'Theater tickets' },
  { id: 18, type: 'expense', category: 'food', amount: 350000, datetime: '2023-01-18T20:00:00Z', description: 'Dinner' },
  { id: 19, type: 'income', category: 'gift', amount: 1000000, datetime: '2023-01-19T10:00:00Z', description: 'Anniversary gift' },
  { id: 20, type: 'expense', category: 'transportation', amount: 25000, datetime: '2023-01-20T08:30:00Z', description: 'Bus fare' }
];

/**
 * Processes financial data to generate totals for a pie chart.
 *
 * @param {Array} data - The array of financial data objects.
 * @param {string} data[].type - The type of the financial entry ('income' or 'expense').
 * @param {number} data[].amount - The amount of the financial entry.
 * @returns {Array} An array of objects representing the pie chart data.
 * @returns {string} returns[].name - The name of the pie chart segment ('Penghasilan' or 'Pengeluaran').
 * @returns {number} returns[].amount - The total amount for the pie chart segment.
 * @returns {string} returns[].color - The color associated with the pie chart segment.
 */

const processDataForPieChart = (data) => {
  const totals = data.reduce(
    (acc, item) => {
      if (item.type === 'income') acc.income += item.amount;
      else if (item.type === 'expense') acc.expense += item.amount;
      return acc;
    },
    { income: 0, expense: 0 }
  );
  return [
    { name: 'Penghasilan', amount: totals.income, color: '#61677A' },
    { name: 'Pengeluaran', amount: totals.expense, color: '#D8D9DA' },
  ];
};


const App = () => {
  const pieData = processDataForPieChart(dummyData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Hello, <Text style={styles.boldText}>Ananda</Text></Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Selamat datang kembali!</Text>
          <Text style={styles.welcomeText}>Mata Uang: IDR</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <PieChart
            data={pieData}
            width={getScreenWidth(40)}
            height={180}
            chartConfig={{
              backgroundColor: '#fff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="amount"
            backgroundColor="transparent"
            center={[40, 0]}
            absolute
            hasLegend={false}
          />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Total {pieData[0]?.name}</Text>
            <Text style={styles.statValue}>{currencyParser(pieData[0]?.amount)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Total {pieData[1]?.name}</Text>
            <Text style={styles.statValue}>{currencyParser(pieData[1]?.amount)}</Text>
          </View>
        </View>
        <Gap height={16} />
        <TouchableOpacity>
          <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 8, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}> +  Tambah Transaksi</Text>
          </View>
        </TouchableOpacity>
        <Gap height={24} />
      </View>
      <View style={{ margin: 16, marginTop: 24 }}>
        <Text style={{ fontWeight: 'bold' }}>Riwayat Transaksi</Text>
        <Gap height={8} />
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id.toString()}
          bounces={false}
          ItemSeparatorComponent={<Gap height={12} />}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', padding: 16, backgroundColor: 'white', borderRadius: 16 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>{item.description}</Text>
                <Gap height={4} />
                <Text style={{ fontSize: 12, color: "grey" }}>{item.category}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: item.type === 'income' ? 'green' : 'red' }}>{item.type === 'income' ? '+' : '-'}{currencyParser(item.amount)}</Text>
                <Gap height={4} />
                <Text style={{ color: 'grey' }}>{moment(item.datetime).format('DD MMM YYYY, HH:mm')}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9"
  },
  header: {
    height: "auto",
    backgroundColor: '#E5EBF1',
    paddingTop: getStatusBarHeightByOS() + 16,
    paddingHorizontal: 16,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24
  },
  greetingText: {
    fontSize: 18,
    color: 'grey'
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black'
  },
  welcomeContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  welcomeText: {
    fontSize: 12,
    color: 'grey'
  },
  statsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stat: {
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statTitle: {
    fontSize: 12
  },
  statValue: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold'
  },
  divider: {
    height: 80,
    width: 1,
    backgroundColor: 'lightgrey'
  }
});

export default App;
