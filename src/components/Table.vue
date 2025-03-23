<script setup>

const items = [
    'Id',
    'Name',
    'Address',
    'City',
    'State',
    'Action',
]

const datas = [[1,'John Doe', 'Louis', 'Libreville', 'Gabon'], [2,'Jane Connor', 'Damas', 'Libreville', 'Gabon']]
    
</script>

<template>
    <div class="p-4 bg-white">
        <table class="min-w-full border-collapse border border-gray-300">
            <thead class="bg-gray-200">
                <tr>
                    <th v-for="(item, index) in items" :key="index" class="border border-gray-300 px-4 py-2">
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in datas" :key="index[0]" class="hover:bg-gray-100">
                    <td v-for="(cell, celleIndex) in data" :key="celleIndex" class="border text-center border-gray-300 px-4 py-2">{{ cell }}</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
                        <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    
</style>