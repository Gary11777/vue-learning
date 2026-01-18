export default {
    template: `
        <form @submit.prevent="add">
            <div class="flex gap-2 mt-5">    
                <input v-model="newAssignment" placeholder="New Assignment" class="text-black border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500 w-40" />
                <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            
            this.newAssignment = '';
        }
    }

}