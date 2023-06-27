<template>
    <div>
        <h2>Dashboard</h2>
        <p>Total Savings Across All Users: {{ getTotalSavingsAcrossUsers }}</p>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    computed: {
        getTotalSavingsAcrossUsers() {
            return this.$root.transactions.reduce(
                (total, transaction) => total + transaction.amount,
                0
            );
        },
    },
};
</script>
