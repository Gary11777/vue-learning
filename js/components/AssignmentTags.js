export default {
    template: `
        <div class="flex gap-2 mb-2">
            <button 
                @click="$emit('change', tag)"
                v-for="tag in tags" 
                class="px-2 py-1 mb-4 border border-gray-600 rounded"
                :class="{ 'bg-gray-600': currentTag === tag }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}