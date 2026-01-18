import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },
    
    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" :loading="loading" title="In Progress">
            <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <assignment-list :assignments="filters.completed" :loading="loading" title="Completed" can-toggle></assignment-list>
            
        </section>
    `,

    data() {
        return {
            assignments: [],
            loading: true
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

    created() {
        this.loading = true;
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
                this.loading = false;
            })
            .catch(error => {
                console.error('Error loading assignments:', error);
                this.loading = false;
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }

}
