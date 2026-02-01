import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';
import Panel from './Panel.js';

export default {
    components: {
        Assignment, AssignmentTags, Panel
    },
    template: `
        <Panel v-show="show && (assignments.length || loading)" class="w-60">
                
                <div class="flex justify-between items-start">
                    <h2 class="font-bold mb-2">
                        {{ title }}
                        <span v-if="!loading">
                            ({{ assignments.length }})
                        </span>
                        <span v-else class="text-gray-500">
                            Loading...
                        </span>
                    </h2>
                    <button v-show="canToggle" @click="show = false">&times;</button>
                </div>

                <assignment-tags 
                    v-if="!loading"
                    v-model:currentTag="currentTag"
                    :initial-tags="assignments.map(a => a.tag)" 
                />
                
                <ul v-if="!loading" class="border border-gray-600 divide-y divide-gray-600">
                    <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"></assignment>
                </ul>

                <slot></slot>
            
        </Panel>
    `,

    props: {
        assignments: Array,
        title: String,
        loading: Boolean,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentTag: 'all',
            show: true
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },
}
