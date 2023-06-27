<template>
  <div>
    <h2>Customer List</h2>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        {{ customer.name }} - Total Savings: {{ getTotalSavings(customer.id) }}
        <router-link :to="{ name: 'TransactionForm', params: { customerId: customer.id } }">Record Transaction</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Customers',
  data() {
    return {
      customers: [
        {
          id: 1,
          name: 'John Doe',
        },
        {
          id: 2,
          name: 'Jane Smith',
        },
      ],
      transactions: [],
    };
  },
  methods: {
    recordTransaction(customerId) {
      const transaction = {
        customerId,
        transactionId: Math.floor(Math.random() * 1000), // Generate a random transaction ID
        date: new Date().toLocaleDateString(), // Current date
        paymentMethod: '',
        amount: 0,
      };
      // Show the transaction form/modal and pass the transaction object to it
      this.$router.push({ name: 'TransactionForm', params: { customerId } });
    },
    getTotalSavings(customerId) {
      return this.transactions
        .filter((transaction) => transaction.customerId === customerId)
        .reduce((total, transaction) => total + transaction.amount, 0);
    },
  },
};
</script>
