<template>
    <div>
        <h3>Record Transaction</h3>
        <form @submit.prevent="saveTransaction">
            <label>
                Transaction ID:
                <input type="text" v-model="transaction.transactionId" disabled />
            </label>
            <br />
            <label>
                Date:
                <input type="text" v-model="transaction.date" disabled />
            </label>
            <br />
            <label>
                Payment Method:
                <input type="text" v-model="transaction.paymentMethod" required />
            </label>
            <br />
            <label>
                Amount:
                <input type="number" v-model="transaction.amount" required />
            </label>
            <br />
            <button type="submit">Save Transaction</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'TransactionForm',
    props: ['transaction'],
    methods: {
        saveTransaction() {
            // Here you can perform any necessary data validation and save the transaction
            this.$emit('transaction-saved', this.transaction); // Emit an event to notify the parent component
            this.$router.go(-1); // Go back to the previous page
        },
    },
};
</script>
