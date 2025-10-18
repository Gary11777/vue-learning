export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
             <span>{{ assignment.name }}</span>

             <input type="checkbox" v-model="assignment.completed" class="ml-3">
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}
