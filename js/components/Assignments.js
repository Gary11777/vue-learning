import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
                
            <form @submit.prevent="add">
                <input v-model="newAssignment" placeholder="New Assignment" class="text-black border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500">
                <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
            </form>
        </section>
    `,

    data() {
        return {
            assignments: [
                { id: 1, name: 'Finishing project', completed: false },
                { id: 2, name: 'Read chapter 4', completed: false },
                { id: 3, name: 'Turn in homework', completed: false }
            ],

            newAssignment: ''
        };
    },
    
    computed: {
       filters() {
        return {
            inProgress: this.assignments.filter(assignment => !assignment.completed),
            completed: this.assignments.filter(assignment => assignment.completed)
        };
       }    
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}
